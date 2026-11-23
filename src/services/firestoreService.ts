import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import {
  Announcement,
  BLUEPRINT_LIMITS,
  Bookmark,
  Chapter,
  Course,
  CurrentAffairsEntry,
  Enrollment,
  Examination,
  LearningProgress,
  PlatformSettings,
  Question,
  StudyMaterial,
  Subject,
  TestAttempt,
  TestPaper,
  Topic,
  Unit,
  UserPrivateInfo,
  UserProfile,
} from '../types/academic';

export function generateSafeId(prefix: string): string {
  const random = Math.random().toString(36).slice(2, 8);
  const stamp = Date.now().toString(36);
  const raw = `${prefix}-${stamp}-${random}`;
  return raw.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, BLUEPRINT_LIMITS.MAX_ID_LENGTH);
}

export function clampString(value: string, maxLen: number): string {
  return value.trim().slice(0, maxLen);
}

function mapSnapshotDocs<T>(
  docs: Array<{ id: string; data: () => unknown }>
): T[] {
  return docs.map((d) => {
    const data = (d.data() ?? {}) as Record<string, unknown>;
    const resolvedId =
      typeof data.id === 'string' && data.id.trim().length > 0 ? data.id : d.id;
    return { ...data, id: resolvedId } as T;
  });
}

// ---------------------------------------------------------------------------
// Published Academic Read Queries (Student / Authenticated)
// ---------------------------------------------------------------------------
export async function fetchPublishedCollection<T>(
  collectionName: string,
  orderField?: string
): Promise<T[]> {
  try {
    const colRef = collection(db, collectionName);
    const q = orderField
      ? query(colRef, where('isPublished', '==', true), orderBy(orderField, 'asc'))
      : query(colRef, where('isPublished', '==', true));
    const snap = await getDocs(q);
    return mapSnapshotDocs<T>(snap.docs);
  } catch (error) {
    // Fallback without orderBy if composite index isn't created yet
    try {
      const colRef = collection(db, collectionName);
      const q = query(colRef, where('isPublished', '==', true));
      const snap = await getDocs(q);
      return mapSnapshotDocs<T>(snap.docs);
    } catch (innerError) {
      handleFirestoreError(innerError, OperationType.LIST, collectionName);
    }
  }
}

// ---------------------------------------------------------------------------
// Admin Read All Queries (Requires Admin Role in Firestore Rules)
// ---------------------------------------------------------------------------
export async function fetchAllAdminCollection<T>(collectionName: string): Promise<T[]> {
  try {
    const snap = await getDocs(collection(db, collectionName));
    return mapSnapshotDocs<T>(snap.docs);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, collectionName);
  }
}

// ---------------------------------------------------------------------------
// Student-Owned Data Queries
// ---------------------------------------------------------------------------
export async function fetchStudentOwned<T>(collectionName: string, userId: string): Promise<T[]> {
  try {
    const q = query(collection(db, collectionName), where('userId', '==', userId));
    const snap = await getDocs(q);
    return mapSnapshotDocs<T>(snap.docs);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, collectionName);
  }
}

export async function enrollInCourse(
  userId: string,
  courseId: string,
  examinationId: string
): Promise<Enrollment> {
  const id = `${userId}_${courseId}`.slice(0, BLUEPRINT_LIMITS.MAX_ID_LENGTH);
  const path = `enrollments/${id}`;
  try {
    const payload = {
      id,
      userId,
      courseId,
      examinationId,
      status: 'active' as const,
      enrolledAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(doc(db, 'enrollments', id), payload);
    const created = await getDoc(doc(db, 'enrollments', id));
    return created.data() as Enrollment;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function toggleBookmark(
  userId: string,
  targetType: Bookmark['targetType'],
  targetId: string,
  title: string,
  subjectTitle = ''
): Promise<{ saved: boolean; id: string }> {
  const id = `${userId}_${targetType}_${targetId}`.slice(0, BLUEPRINT_LIMITS.MAX_ID_LENGTH);
  const path = `bookmarks/${id}`;
  try {
    const ref = doc(db, 'bookmarks', id);
    const existing = await getDoc(ref);
    if (existing.exists()) {
      await deleteDoc(ref);
      return { saved: false, id };
    }
    await setDoc(ref, {
      id,
      userId,
      targetType,
      targetId,
      title: clampString(title, 200),
      subjectTitle: clampString(subjectTitle, 160),
      note: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { saved: true, id };
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function removeBookmark(bookmarkId: string): Promise<void> {
  const path = `bookmarks/${bookmarkId}`;
  try {
    await deleteDoc(doc(db, 'bookmarks', bookmarkId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function saveTopicProgress(params: {
  userId: string;
  courseId: string;
  subjectId: string;
  chapterId: string;
  topicId: string;
  materialId?: string;
  completionStatus: LearningProgress['completionStatus'];
}): Promise<void> {
  const id = `${params.userId}_${params.topicId}`.slice(0, BLUEPRINT_LIMITS.MAX_ID_LENGTH);
  const path = `learningProgress/${id}`;
  try {
    const ref = doc(db, 'learningProgress', id);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      await updateDoc(ref, {
        materialId: params.materialId ?? '',
        completionStatus: params.completionStatus,
        lastAccessedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(ref, {
        id,
        userId: params.userId,
        courseId: params.courseId,
        subjectId: params.subjectId,
        chapterId: params.chapterId,
        topicId: params.topicId,
        materialId: params.materialId ?? '',
        completionStatus: params.completionStatus,
        lastAccessedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function startTestAttempt(params: {
  userId: string;
  test: TestPaper;
}): Promise<string> {
  const id = generateSafeId('att');
  const path = `testAttempts/${id}`;
  try {
    await setDoc(doc(db, 'testAttempts', id), {
      id,
      userId: params.userId,
      testId: params.test.id,
      testTitle: clampString(params.test.title, 200),
      status: 'in_progress',
      score: 0,
      totalMarks: params.test.totalMarks,
      correctCount: 0,
      incorrectCount: 0,
      unansweredCount: params.test.questionCount,
      durationSeconds: 0,
      startedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function submitTestAttempt(params: {
  attemptId: string;
  score: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  durationSeconds: number;
}): Promise<void> {
  const path = `testAttempts/${params.attemptId}`;
  try {
    await updateDoc(doc(db, 'testAttempts', params.attemptId), {
      status: 'submitted',
      score: params.score,
      correctCount: params.correctCount,
      incorrectCount: params.incorrectCount,
      unansweredCount: params.unansweredCount,
      durationSeconds: params.durationSeconds,
      submittedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

// ---------------------------------------------------------------------------
// Admin Write Helpers
// ---------------------------------------------------------------------------
export async function upsertAdminEntity<T extends { id: string }>(
  collectionName: string,
  id: string,
  payload: Omit<T, 'createdAt' | 'updatedAt'>,
  isEdit: boolean
): Promise<void> {
  const path = `${collectionName}/${id}`;
  try {
    const ref = doc(db, collectionName, id);
    if (isEdit) {
      const updatePayload = { ...payload } as Record<string, unknown>;
      delete updatePayload.id;
      delete updatePayload.createdBy;
      delete updatePayload.createdAt;
      updatePayload.updatedAt = serverTimestamp();
      await updateDoc(ref, updatePayload);
    } else {
      await setDoc(ref, {
        ...payload,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, isEdit ? OperationType.UPDATE : OperationType.CREATE, path);
  }
}

export async function deleteAdminEntity(collectionName: string, id: string): Promise<void> {
  const path = `${collectionName}/${id}`;
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function updateStudentStatusByAdmin(
  uid: string,
  status: 'active' | 'disabled' | 'suspended'
): Promise<void> {
  const path = `users/${uid}`;
  try {
    await updateDoc(doc(db, 'users', uid), {
      accountStatus: status,
      status,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function fetchUserPrivateInfo(uid: string): Promise<UserPrivateInfo | null> {
  const path = `users/${uid}/private/info`;
  try {
    const snap = await getDoc(doc(db, 'users', uid, 'private', 'info'));
    return snap.exists() ? (snap.data() as UserPrivateInfo) : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function fetchPlatformSettings(): Promise<PlatformSettings | null> {
  const path = 'platformSettings/default';
  try {
    const snap = await getDoc(doc(db, 'platformSettings', 'default'));
    return snap.exists() ? (snap.data() as PlatformSettings) : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function savePlatformSettings(
  adminUid: string,
  values: {
    platformName: string;
    supportEmail: string;
    maintenanceNotice: string;
    allowNewRegistrations: boolean;
  }
): Promise<void> {
  const path = 'platformSettings/default';
  try {
    const ref = doc(db, 'platformSettings', 'default');
    const existing = await getDoc(ref);
    if (existing.exists()) {
      await updateDoc(ref, {
        platformName: clampString(values.platformName, 120),
        supportEmail: clampString(values.supportEmail, 160),
        maintenanceNotice: clampString(values.maintenanceNotice, 500),
        allowNewRegistrations: values.allowNewRegistrations,
        updatedBy: adminUid,
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(ref, {
        id: 'default',
        platformName: clampString(values.platformName, 120),
        supportEmail: clampString(values.supportEmail, 160),
        maintenanceNotice: clampString(values.maintenanceNotice, 500),
        allowNewRegistrations: values.allowNewRegistrations,
        updatedBy: adminUid,
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export type AcademicCollectionsBundle = {
  examinations: Examination[];
  courses: Course[];
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
  studyMaterials: StudyMaterial[];
  questions: Question[];
  tests: TestPaper[];
  announcements: Announcement[];
  currentAffairs: CurrentAffairsEntry[];
  users?: UserProfile[];
  testAttempts?: TestAttempt[];
};
