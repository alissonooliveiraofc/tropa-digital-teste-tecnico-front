import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  PasswordWrapper,
  EyeButton,
  Left,
  Logo,
  TitleBlock,
  Title,
  Subtitle,
  Form,
  Field,
  Label,
  Input,
  Button,
  Right,
  Illustration
} from './LoginForm.styles';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem('logged', 'true');
    navigate('/eventos');
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