import Sidebar from "../components/SideBar/SideBar";
import PageUnderConstruction from "../components/Construction/PageUnderConstruction";

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