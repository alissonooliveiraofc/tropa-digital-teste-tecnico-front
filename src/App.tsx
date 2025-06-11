import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import Dashboard from './pages/Dashboard';
import Equipes from './pages/Equipes';
import Inscricoes from './pages/Inscricoes';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/inscricoes" element={<Inscricoes />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;