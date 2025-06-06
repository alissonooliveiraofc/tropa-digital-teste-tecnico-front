import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f9;
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  max-width: 700px;
  width: 100%;

  
`;

const Left = styled.div`
  padding: 40px;
  flex: 1;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  color: #D77B38;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  color: #D77B38;
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 600;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 28px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Label = styled.label`
  color: #b06b25;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  font-size: 1rem;
  background: #f7f7f9;
  outline: none;
  &:focus {
    border-color: #D77B38;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 7px;
  background: #D77B38;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
  &:hover {
    background: #b06b25;
  }

  // @media (max-width: 700px) {
  //   justify-self: center; /* Centraliza o botão em telas pequenas */
  //   width: 25%;
  // }
`;

const Right = styled.div`
  background: #e47a3d;
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  // @media (max-width: 700px) {
  //   display: none; /* Esconde a parte direita em telas pequenas */
  // }
  
`;

// Substitua o caminho pelo SVG baixado do Figma (coloque na pasta assets)
const Illustration = styled.img`
  max-width: 220px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login: salve algo no localStorage
    localStorage.setItem('logged', 'true');
    window.location.href = '/dashboard'; // depois vamos melhorar com react-router
  };

  return (
    <Container>
      <Card>
        <Left>
          <Logo>
            <img src={'/illustration.png'} alt="Tropa Digital" height={24} />
          </Logo>
          <Title>Bem-vindo de volta</Title>
          <Subtitle>
            Entre com sua conta para acessar o painel.
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seunome@seuservidor.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Digite aqui"
                required
              />
            </div>
            <Button type="submit">Enviar</Button>
          </Form>
        </Left>
        <Right>
          <Illustration src="/img-right.png" alt="Ilustração da Direita" />
        </Right>
      </Card>
    </Container>
  );
}