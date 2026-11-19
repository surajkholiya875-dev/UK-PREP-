# UK Prep Security Specification (Phase 0)

## 1. Data Invariants
1. **Identity & Privilege Escalation Prevention**: A user document at `/users/{userId}` can only be created with `role == 'student'` and `uid == request.auth.uid`. Public administrator registration is strictly forbidden. Only an existing verified administrator (`isAdmin()`) can create `/admins/{userId}` or update a user's `role`.
2. **PII Isolation**: User email, phone number, and district are isolated in `/users/{userId}/private/{infoId}`. Non-owners and unverified callers cannot read or write another user's private PII.
3. **Academic Hierarchy Integrity**: Courses reference an existing `examinationId`; subjects reference an existing `courseId`; units reference `subjectId`; chapters reference `unitId`; topics reference `chapterId`; studyMaterials reference `topicId`. Only `isAdmin()` can create, edit, or delete academic hierarchy documents.
4. **Published Content Gate**: Non-admin authenticated users may only read (`get` and `list`) academic resources (`examinations`, `courses`, `subjects`, `units`, `chapters`, `topics`, `studyMaterials`, `questions`, `tests`, `announcements`, `currentAffairs`) where `isPublished == true`.
5. **Student Ownership & Terminal State Locking**: `enrollments`, `testAttempts`, `learningProgress`, and `bookmarks` belong strictly to `userId == request.auth.uid`. Once a `TestAttempt` transitions to `status == 'submitted'`, non-admin clients cannot alter its score or status.
6. **Temporal & Structural Integrity**: All `createdAt` and `updatedAt` timestamps must match `request.time`. All document IDs must satisfy `^[a-zA-Z0-9_\-]+$` and `<= 128` chars. All write payloads enforce `keys().hasAll(...)` and `keys().hasOnly(...)` to block shadow fields.

## 2. The "Dirty Dozen" Attack Payloads
1. **Privilege Escalation on Registration**: Student creates `/users/studentA` with `role: 'admin'`. -> `PERMISSION_DENIED`.
2. **Self-Admin Grant**: Student creates `/admins/studentA` for themselves. -> `PERMISSION_DENIED`.
3. **Shadow Field Injection on Profile**: Student updates `/users/studentA` adding `isVerifiedSuperUser: true`. -> `PERMISSION_DENIED`.
4. **Unverified Email Spoofing**: Attacker signs in with email `surajkholiya875@gmail.com` where `email_verified: false` and attempts admin write. -> `PERMISSION_DENIED`.
5. **Cross-Student PII Theft**: Student A reads `/users/studentB/private/info`. -> `PERMISSION_DENIED`.
6. **Cross-Student Progress Tampering**: Student A writes `/learningProgress/prog1` with `userId: 'studentB'`. -> `PERMISSION_DENIED`.
7. **Terminal TestAttempt Score Alteration**: Student A updates submitted `/testAttempts/att1` from `score: 40` to `score: 100`. -> `PERMISSION_DENIED`.
8. **Draft Academic Content Scraping**: Student A lists `/questions` without `isPublished == true` filter or fetches unpublished question. -> `PERMISSION_DENIED`.
9. **Orphaned Course Creation**: Admin attempts to create `/courses/c1` referencing non-existent `examinationId: 'missing'`. -> `PERMISSION_DENIED`.
10. **ID Poisoning / Denial of Wallet**: Attacker attempts write to `/bookmarks/<2000-char-id>` or injects `100KB` string into `title`. -> `PERMISSION_DENIED`.
11. **Timestamp Forgery**: Student creates `/bookmarks/b1` with backdated `createdAt` not equal to `request.time`. -> `PERMISSION_DENIED`.
12. **Blanket User Directory Scraping**: Student A runs `list` on `/users`. -> `PERMISSION_DENIED`.
