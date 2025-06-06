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
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  max-width: 750px;
  height: 498px;
  width: 100%;
  padding: 11px;
  
`;

const Left = styled.div`
  padding: 20px;
  flex: 1;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  color: #cc6237;
  justify-self: start;
  display: flex;
  align-items: center;
  margin-bottom: 24px; // Adiciona espaço abaixo do logo
  margin-top: -30px;   // Move o logo um pouco para cima
`;

const Title = styled.h2`
  color: #cc6237;
  font-size: 1.6rem;
  margin-bottom: 8px;
  font-weight: 600;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #9BACCB;
  margin-bottom: 28px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; /* Espaço entre label e input */
`;

const Label = styled.label`
  color: #cc6237;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 45px;
  font-size: 1rem;
  background: #f7f7f9;
  outline: none;
  &:focus {
    border-color: #cc6237;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 7px;
  background: #cc6237;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
  }

  // @media (max-width: 700px) {
  //   justify-self: center; /* Centraliza o botão em telas pequenas */
  //   width: 25%;
  // }
`;

const Right = styled.div`
  background: #cc6237;
  flex: 1;
  min-width: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  // @media (max-width: 700px) {
  //   display: none; /* Esconde a parte direita em telas pequenas */
  // }
  
`;

// Substitua o caminho pelo SVG baixado do Figma (coloque na pasta assets)
const Illustration = styled.img`
  max-width: 357px;
  max-height: 316px;
  margin-top: 161px; /* Adiciona um pouco de espaço acima da imagem */
  margin-right: 20px; /* Adiciona espaço à esquerda da imagem */
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
            <img src={'/illustration.png'} alt="Tropa Digital" height={25} />
          </Logo>
          <Title>Bem-vindo de volta</Title>
          <Subtitle>
            Entre com sua conta para acessar o painel.
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="seunome@seuservidor.com"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Digite aqui"
                required
              />
            </Field>
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