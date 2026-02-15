import { Link } from "react-router-dom";
import { clearMockSession, getMockSession } from "../auth/mockSession";

export default function ClienteHomePage() {
  const session = getMockSession();

  return (
    <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>Panel de Cliente (temporal)</h1>
      <p>
        Bienvenido/a <strong>{session?.email}</strong>. Este acceso está
        simulado en frontend mientras se integra el backend.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/catalogue">Ir al catálogo</Link>
        <Link to="/suscripciones">Ir a suscripciones</Link>
        <Link to="/" onClick={clearMockSession}>
          Cerrar sesión
        </Link>
      </div>
    </main>
  );
}
