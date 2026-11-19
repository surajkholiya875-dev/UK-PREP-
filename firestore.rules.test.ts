/**
 * Security Rules Verification Suite (Phase 0 - Dirty Dozen Specification)
 * Intended for execution against the Firebase Local Emulator Suite (@firebase/rules-unit-testing).
 */

export interface DirtyDozenScenario {
  id: string;
  name: string;
  collectionPath: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  expectedResult: 'PERMISSION_DENIED';
  description: string;
}

export const DIRTY_DOZEN_SCENARIOS: DirtyDozenScenario[] = [
  {
    id: 'DD-01',
    name: 'Privilege Escalation on Registration',
    collectionPath: '/users/studentA',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Authenticated student attempts to create profile with role: "admin".',
  },
  {
    id: 'DD-02',
    name: 'Self-Admin Grant',
    collectionPath: '/admins/studentA',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Authenticated student attempts to write directly to /admins/{uid}.',
  },
  {
    id: 'DD-03',
    name: 'Shadow Field Injection',
    collectionPath: '/users/studentA',
    operation: 'update',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Student attempts to inject an unlisted field such as isVerifiedSuperUser: true.',
  },
  {
    id: 'DD-04',
    name: 'Unverified Email Spoofing',
    collectionPath: '/examinations/ukpsc-upper',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Caller with admin email string but email_verified=false attempts admin write.',
  },
  {
    id: 'DD-05',
    name: 'Cross-Student PII Theft',
    collectionPath: '/users/studentB/private/info',
    operation: 'get',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Student A attempts to read Student B isolated PII document.',
  },
  {
    id: 'DD-06',
    name: 'Cross-Student Progress Tampering',
    collectionPath: '/learningProgress/prog1',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Student A attempts to write learning progress with userId set to Student B.',
  },
  {
    id: 'DD-07',
    name: 'Terminal TestAttempt Score Alteration',
    collectionPath: '/testAttempts/attempt1',
    operation: 'update',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Student A attempts to modify score after status reached terminal value "submitted".',
  },
  {
    id: 'DD-08',
    name: 'Unpublished Draft Content Access',
    collectionPath: '/questions/draftQ1',
    operation: 'get',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Non-admin student attempts to read unpublished question document.',
  },
  {
    id: 'DD-09',
    name: 'Orphaned Course Creation',
    collectionPath: '/courses/orphanCourse',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Admin attempts to create a course referencing a non-existent examinationId.',
  },
  {
    id: 'DD-10',
    name: 'ID Poisoning & Payload Exhaustion',
    collectionPath: '/bookmarks/invalid_long_id',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Caller attempts write with ID > 128 chars or oversized string payload.',
  },
  {
    id: 'DD-11',
    name: 'Timestamp Forgery',
    collectionPath: '/bookmarks/bm1',
    operation: 'create',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Student sends backdated createdAt timestamp not equal to request.time.',
  },
  {
    id: 'DD-12',
    name: 'Blanket User Directory Scraping',
    collectionPath: '/users',
    operation: 'list',
    expectedResult: 'PERMISSION_DENIED',
    description: 'Non-admin student attempts to list all user profiles.',
  },
];
