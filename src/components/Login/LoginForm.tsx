import styled from 'styled-components';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f9;
  min-width: 300px;
`;

const Card = styled.div`
  display: flex;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  max-width: 758px;
  min-width: 300px;
  height: 498px;
  width: 100%;
  padding: 11px;

  @media (max-width: 530px) {
  padding: 50px;
}
  
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const EyeButton = styled.button`
  position: absolute;
  left: 230px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #b06b25;
  font-size: 1.25rem;

  @media (max-width: 747px) {
  left: 200px;
}

@media (max-width: 709px) {
  left: 200px;
}

@media (max-width: 663px) {
  left: 200px;
}

@media (max-width: 645px) {
  left: 180px;
}

@media (max-width: 590px) {
  left: 160px;
}

@media (max-width: 530px) {
  left: 230px;
}

@media (max-width: 485px) {
  left: 200px;

  @media (max-width: 437px) {
  left: 180px;
}

@media (max-width: 418px) {
  left: 170px;
}
}
`;

const Left = styled.div`
  padding: 20px;
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -48px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  color: #cc6237;
  justify-self: start;
  display: flex;
  align-items: center;
  margin-bottom: 15px; // Adiciona espaço abaixo do logo
  
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: -20x; /* Move o bloco de título para cima */

`;

const Title = styled.h2`
  color: #cc6237;
  font-size: 1.6rem;
  margin: 0;
  font-weight: 600;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  color: #9BACCB;
  margin-bottom: 28px;
  margin-top: -10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
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
  font-size: 0.8rem;
`;

const Input = styled.input`
  padding: 10px 14px;
  color: #657593;
  width: 87%;
  border: 1px solid #e0e0e0;
  border-radius: 45px;
  font-size: 0.75rem;
  background: #F6F6F6;
  outline: none;
  &:focus {
    border-color: #cc6237;
  }
  
  &::placeholder {
    font-size: 0.75rem; /* diminua esse valor conforme desejar */
    color: #657593;
  }

  @media (max-width: 530px) {
  width: 85%;
}
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 45px;
  background: #cc6237;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 3px;
  width: 87%;

  @media (max-width: 530px) {
  width: 70%;
}
`;

const Right = styled.div`
  background: #cc6237;
  flex: 1;
  min-width: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  
  @media (max-width: 709px) {
    min-width: 180px;
    padding: 0;
    & img {
      max-width: 325px;
      max-height: 316px;
      margin-top: 190px;
      margin-right: 60px;
    }
  }

  @media (max-width: 651px) {
    min-width: 180px;
    padding: 0;
    & img {
      max-width: 270px;
      max-height: 316px;
      margin-top: 238px;
      margin-right: 80px;
    }
  }

  @media (max-width: 622px) {
    min-width: 180px;
    padding: 0;
    & img {
      max-width: 250px;
      max-height: 316px;
      margin-top: 256px;
      margin-right: 110px;
    }
  }

  @media (max-width: 556px) {
    min-width: 180px;
    padding: 0;
    & img {
      max-width: 240px;
      max-height: 316px;
      margin-top: 265px;
      margin-right: 110px;
    }
  }

  @media (max-width: 550px) {
    min-width: 180px;
    padding: 0;
    & img {
      max-width: 220px;
      max-height: 316px;
      margin-top: 282px;
      margin-right: 110px;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
  
`;

const Illustration = styled.img`
  max-width: 357px;
  max-height: 316px;
  margin-top: 161px; /* Adiciona um pouco de espaço acima da imagem */
  margin-right: 80px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem('logged', 'true');
    window.location.href = '/dashboard';
  };

  return (
    <Container>
      <Card>
        <Left>
          <Logo>
            <img src={'/illustration.png'} alt="Tropa Digital" height={25} />
          </Logo>
          <TitleBlock>
            <Title>Bem-vindo de volta</Title>
            <Subtitle>
              Entre com sua conta para acessar o painel.
            </Subtitle>
          </TitleBlock>

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
              <PasswordWrapper>
                <Input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder="Digite aqui"
                  required
                />
                <EyeButton
                  type="button"
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </EyeButton>
              </PasswordWrapper>
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