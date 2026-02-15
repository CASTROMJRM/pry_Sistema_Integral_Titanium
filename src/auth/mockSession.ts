export type UserRole = "cliente" | "entrenador" | "admin";

const STORAGE_KEY = "titanium_mock_session";

export interface MockSession {
  email: string;
  role: UserRole;
}

export function saveMockSession(session: MockSession) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function getMockSession(): MockSession | null {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as MockSession;

    if (!parsed?.email || !parsed?.role) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function clearMockSession() {
  localStorage.removeItem(STORAGE_KEY);
}
