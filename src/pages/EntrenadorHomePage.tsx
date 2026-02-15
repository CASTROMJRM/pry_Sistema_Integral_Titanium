import { Link } from "react-router-dom";
import { clearMockSession, getMockSession } from "../auth/mockSession";

export default function EntrenadorHomePage() {
  const session = getMockSession();

  return (
    <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>Panel de Entrenador (pendiente)</h1>
      <p>
        Hola <strong>{session?.email}</strong>. Este módulo aún no está
        construido, pero el flujo de login por rol ya quedó listo.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/">Ir al inicio</Link>
        <Link to="/login">Cambiar rol</Link>
        <Link to="/" onClick={clearMockSession}>
          Cerrar sesión
        </Link>
      </div>
    </main>
  );
}
