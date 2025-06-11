import Sidebar from "../components/SideBar";
import PageUnderConstruction from "../components/PageUnderConstruction";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 32 }}>
        <PageUnderConstruction title="Dashboard" />
      </main>
    </div>
  );
};