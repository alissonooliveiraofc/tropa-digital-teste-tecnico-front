import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 350px;
  justify-content: center;
  height: 100%;
  width: 50%;
  min-height: 350px;
  gap: 24px;
`;

const Img = styled.img`
  width: 250px;
  max-width: 90vw;
  opacity: 0.8;
`;

const Title = styled.h2`
  color: #e8763e;
  font-size: 1.5rem;
`;

export default function PageUnderConstruction({ title = "Página em construção" }) {
  return (
    <Wrapper>
      <Img src="/construction.png" alt="Página em construção" />
      <Title>{title}</Title>
      <p style={{ color: "#888" }}>Estamos trabalhando nesta funcionalidade.</p>
    </Wrapper>
  );
}