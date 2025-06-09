import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/eventos" element={<Eventos />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;