import { Wrapper, Img, Title } from "./PageUnderConstructionStyles";

export default function PageUnderConstruction({ title = "Página em construção" }) {
  return (
    <Wrapper>
      <Img src="/construction.png" alt="Página em construção" />
      <Title>{title}</Title>
      <p style={{ color: "#888" }}>Estamos trabalhando nesta funcionalidade.</p>
    </Wrapper>
  );
}