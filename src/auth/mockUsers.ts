import type { UserRole } from "./mockSession";

interface MockUser {
  email: string;
  password: string;
  role: UserRole;
}

export const MOCK_USERS: MockUser[] = [
  { email: "cliente@titanium.com", password: "123456", role: "cliente" },
  {
    email: "entrenador@titanium.com",
    password: "123456",
    role: "entrenador",
  },
  { email: "admin@titanium.com", password: "123456", role: "admin" },
];
