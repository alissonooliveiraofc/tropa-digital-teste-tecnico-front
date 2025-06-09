import Sidebar from '../components/SideBar';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  background: #f8f8f8;
  min-height: 100dvh;
`;

const Main = styled.main`
  margin-left: 240px; /* Mesma largura da sidebar */
  flex: 1;
  padding: 32px;
  min-width: 0;
`;

const Header = styled.div`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #77625c;
`;

const Title = styled.h3`
  color: #e8763e;
  font-size: 1.16rem;
  margin-bottom: 1.2rem;
  margin-top: 0.6rem;
  font-weight: 700;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e1e5ee;
  border-radius: 12px;
  padding: 30px 22px 12px 22px;
  box-shadow: 0 3px 20px rgba(232, 118, 62, 0.08);
  margin-bottom: 24px;
`;

export default function Eventos() {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <Header>
          Bem vindo de volta, <strong>Kaique Steck</strong>
        </Header>
        <Title>Todos eventos</Title>
        <Card>
          {/* Conteúdo do card de eventos */}
        </Card>
      </Main>
    </Layout>
  );
}