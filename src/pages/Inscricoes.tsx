import Sidebar from "../components/SideBar";
import PageUnderConstruction from "../components/PageUnderConstruction";

export default function Inscricoes() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 32 }}>
        <PageUnderConstruction title="Inscrições" />
      </main>
    </div>
  );
}