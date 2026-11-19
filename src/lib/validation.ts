export interface ValidationResult<T = string> {
  valid: boolean;
  value: T;
  error?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts 10-digit Indian mobile numbers starting 6-9, optionally prefixed with +91, 91, or 0
const INDIAN_MOBILE_DIGITS_REGEX = /^(?:(?:\+91|91|0)?([6-9]\d{9}))$/;

export function validateFullName(raw: string): ValidationResult {
  const trimmed = raw.trim();
  if (trimmed.length < 2) {
    return { valid: false, value: trimmed, error: 'Full name must be at least 2 characters long.' };
  }
  if (trimmed.length > 120) {
    return { valid: false, value: trimmed.slice(0, 120), error: 'Full name must not exceed 120 characters.' };
  }
  return { valid: true, value: trimmed };
}

export function validateEmail(raw: string): ValidationResult {
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed || trimmed.length > 160 || !EMAIL_REGEX.test(trimmed)) {
    return { valid: false, value: trimmed, error: 'Please enter a valid email address.' };
  }
  return { valid: true, value: trimmed };
}

export function validateIndianPhoneNumber(raw: string, required = true): ValidationResult {
  const cleaned = raw.replace(/[\s()-]/g, '').trim();
  if (!cleaned) {
    if (required) {
      return {
        valid: false,
        value: '',
        error: 'Phone number is required. Enter a valid 10-digit Indian mobile number.',
      };
    }
    return { valid: true, value: '' };
  }

  const match = cleaned.match(INDIAN_MOBILE_DIGITS_REGEX);
  if (!match || !match[1]) {
    return {
      valid: false,
      value: raw.trim(),
      error: 'Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9, optionally prefixed with +91).',
    };
  }

  // Normalized format matches firestore.rules ^[0-9+\-\s]{0,20}$
  return { valid: true, value: `+91 ${match[1]}` };
}

export function validatePassword(password: string, confirmPassword?: string): ValidationResult {
  if (!password || password.length < 8) {
    return {
      valid: false,
      value: password,
      error: 'Password must be at least 8 characters long.',
    };
  }
  if (password.length > 128) {
    return {
      valid: false,
      value: password,
      error: 'Password must not exceed 128 characters.',
    };
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    return {
      valid: false,
      value: password,
      error: 'Password and confirm password do not match.',
    };
  }
  return { valid: true, value: password };
}

export function validateDistrict(raw: string, required = true): ValidationResult {
  const trimmed = raw.trim();
  if (required && !trimmed) {
    return { valid: false, value: '', error: 'Please select your district.' };
  }
  if (trimmed.length > 80) {
    return { valid: false, value: trimmed.slice(0, 80), error: 'District must not exceed 80 characters.' };
  }
  return { valid: true, value: trimmed };
}

export function validatePrimaryTargetExam(raw: string, required = true): ValidationResult {
  const trimmed = raw.trim();
  if (required && !trimmed) {
    return { valid: false, value: '', error: 'Please select your primary target examination.' };
  }
  if (trimmed.length > 120) {
    return { valid: false, value: trimmed.slice(0, 120), error: 'Target examination must not exceed 120 characters.' };
  }
  return { valid: true, value: trimmed };
}

export interface RegistrationValidationInput {
  fullName: string;
  phoneNumber: string;
  email: string;
  district: string;
  primaryTargetExam: string;
  password: string;
  confirmPassword: string;
}

export function validateRegistrationInput(input: RegistrationValidationInput): {
  valid: boolean;
  error?: string;
  sanitized?: {
    fullName: string;
    phoneNumber: string;
    email: string;
    district: string;
    primaryTargetExam: string;
    password: string;
  };
} {
  const nameCheck = validateFullName(input.fullName);
  if (!nameCheck.valid) return { valid: false, error: nameCheck.error };

  const phoneCheck = validateIndianPhoneNumber(input.phoneNumber, true);
  if (!phoneCheck.valid) return { valid: false, error: phoneCheck.error };

  const emailCheck = validateEmail(input.email);
  if (!emailCheck.valid) return { valid: false, error: emailCheck.error };

  const districtCheck = validateDistrict(input.district, true);
  if (!districtCheck.valid) return { valid: false, error: districtCheck.error };

  const examCheck = validatePrimaryTargetExam(input.primaryTargetExam, true);
  if (!examCheck.valid) return { valid: false, error: examCheck.error };

  const passCheck = validatePassword(input.password, input.confirmPassword);
  if (!passCheck.valid) return { valid: false, error: passCheck.error };

  return {
    valid: true,
    sanitized: {
      fullName: nameCheck.value,
      phoneNumber: phoneCheck.value,
      email: emailCheck.value,
      district: districtCheck.value,
      primaryTargetExam: examCheck.value,
      password: passCheck.value,
    },
  };
}
