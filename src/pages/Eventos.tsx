import React, { useState, useEffect } from 'react';
import Sidebar from '../components/SideBar';
import styled from 'styled-components';
import EventosTable from '../components/EventosTable';

const Layout = styled.div`
  display: flex;
  background: #f8f8f8;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 240px;
  min-width: 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  margin-bottom: 10px;
  margin-top: 32px;
  font-size: 1.1rem;
  color: #77625c;
`;

const Title = styled.h3`
  color: #CC6237;
  font-size: 1.16rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e1e5ee;
  border-radius: 12px;
  padding: 30px 22px 12px 22px;
  box-shadow: 0 3px 20px rgba(232, 118, 62, 0.08);
  margin-bottom: 24px;
  margin-top: 5px;
  align-self: stretch;
  box-sizing: border-box;
  width: 97%;
  max-width: unset;
`;

export default function Eventos() {
  // Estado compartilhado do nome do usuário
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "Kaique Steck");

  // Atualiza o nome se mudar no localStorage (ex: em outro tab)
  useEffect(() => {
    const onStorage = () => setUserName(localStorage.getItem("userName") || "Kaique Steck");
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <Layout>
      <Sidebar onUserChange={setUserName} />
      <Main>
        <Header>
          Bem vindo de volta, <strong>{userName}</strong>
        </Header>
        <Title>Todos eventos</Title>
        <Card>
          <EventosTable />
        </Card>
      </Main>
    </Layout>
  );
}