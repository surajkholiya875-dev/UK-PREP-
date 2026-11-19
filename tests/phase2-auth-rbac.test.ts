import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  validateEmail,
  validateFullName,
  validateIndianPhoneNumber,
  validatePassword,
  validateRegistrationInput,
} from '../src/lib/validation';
import { resolveServerRole } from '../server/authMiddleware';
import type { DecodedIdToken } from 'firebase-admin/auth';

function runTests() {
  let passed = 0;

  // 1. Validation tests
  {
    assert.equal(validateFullName('A').valid, false, 'Short full name rejected');
    assert.equal(validateFullName('Priya Rawat').valid, true, 'Valid full name accepted');
    passed += 2;
  }

  {
    assert.equal(validateEmail('bad-email').valid, false, 'Malformed email rejected');
    assert.equal(validateEmail('aspirant@ukprep.in').valid, true, 'Valid email accepted');
    passed += 2;
  }

  {
    const p1 = validateIndianPhoneNumber('+91 9876543210');
    assert.equal(p1.valid, true);
    assert.equal(p1.value, '+91 9876543210');

    const p2 = validateIndianPhoneNumber('09876543210');
    assert.equal(p2.valid, true);
    assert.equal(p2.value, '+91 9876543210');

    const p3 = validateIndianPhoneNumber('7890123456');
    assert.equal(p3.valid, true);
    assert.equal(p3.value, '+91 7890123456');

    assert.equal(validateIndianPhoneNumber('1234567890').valid, false, 'Must start with 6-9');
    assert.equal(validateIndianPhoneNumber('98765').valid, false, 'Too short rejected');
    assert.equal(validateIndianPhoneNumber('+1 4155551234').valid, false, 'Non-Indian country code rejected');
    passed += 6;
  }

  {
    assert.equal(validatePassword('1234567').valid, false, 'Under 8 chars rejected');
    assert.equal(validatePassword('Pass@1234', 'Mismatch').valid, false, 'Mismatch rejected');
    assert.equal(validatePassword('Pass@1234', 'Pass@1234').valid, true, '8+ matching password accepted');
    passed += 3;
  }

  {
    const fullCheck = validateRegistrationInput({
      fullName: 'Amit Bisht',
      phoneNumber: '9876543210',
      email: 'amit@example.com',
      district: 'Nainital',
      primaryTargetExam: 'UKPSC Combined State Civil Services',
      password: 'StrongPassword123',
      confirmPassword: 'StrongPassword123',
    });
    assert.equal(fullCheck.valid, true);
    assert.equal(fullCheck.sanitized?.phoneNumber, '+91 9876543210');
    passed += 1;
  }

  // 2. Server RBAC role resolution tests
  {
    const studentToken = {
      uid: 'stu-1',
      email: 'student@example.com',
      email_verified: true,
    } as unknown as DecodedIdToken;
    assert.equal(resolveServerRole(studentToken), 'student');

    const spoofedUnverifiedAdmin = {
      uid: 'adm-spoof',
      email: 'surajkholiya875@gmail.com',
      email_verified: false,
    } as unknown as DecodedIdToken;
    assert.equal(resolveServerRole(spoofedUnverifiedAdmin), 'student');

    const customClaimAdmin = {
      uid: 'adm-claim',
      email: 'ops@ukprep.in',
      email_verified: true,
      role: 'admin',
    } as unknown as DecodedIdToken;
    assert.equal(resolveServerRole(customClaimAdmin), 'admin');

    const verifiedBootstrapAdmin = {
      uid: 'adm-boot',
      email: 'surajkholiya875@gmail.com',
      email_verified: true,
    } as unknown as DecodedIdToken;
    assert.equal(resolveServerRole(verifiedBootstrapAdmin), 'admin');
    passed += 4;
  }

  // 3. Firestore rules static invariant checks
  {
    const rules = fs.readFileSync(path.resolve(process.cwd(), 'firestore.rules'), 'utf8');
    assert.match(rules, /allow read, write: if false;/, 'Global default deny present');
    assert.match(rules, /incoming\(\)\.role == 'student'/, 'Client registration locked to student role');
    assert.match(rules, /incoming\(\)\.role == existing\(\)\.role/, 'Client profile update cannot escalate role');
    assert.match(rules, /allow create: if isValidId\(userId\)[\s\S]*isAdmin\(\)/, 'Admin collection create restricted to verified admin');
    assert.match(rules, /allow list: if isAdmin\(\);/, 'User directory scraping blocked for students');
    passed += 5;
  }

  console.log(`All ${passed} Phase 2 Auth & RBAC verification checks passed.`);
}

runTests();
