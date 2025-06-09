import styled from "styled-components";
import { FiGrid, FiCalendar, FiUsers, FiClipboard } from "react-icons/fi";

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px;
  width: 210px;
  height: 100dvh;
  background: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 40px 0 24px 32px;
  min-height: 60px;
  img {
    height: 25px;
    width: 161px;
    margin-right: 7px;
  }
`;

const MenuLabel = styled.div`
  color: #b4b4b4;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 0 10px 32px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0 0 0 18px;
  margin: 0;
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 10px 14px;
  border-radius: 8px;
  color: ${({ active }) => (active ? "#fff" : "#232323")};
  background: ${({ active }) => (active ? "#e8763e" : "transparent")};
  font-weight: ${({ active }) => (active ? 600 : 500)};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2px;
  transition: background 0.15s, color 0.15s;
  svg {
    font-size: 1.25rem;
    color: ${({ active }) => (active ? "#fff" : "#b4b4b4")};
  }
  &:hover {
    background: #e8763e;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const UserBlock = styled.div`
  border-top: 1px solid #eee;
  margin: 18px 0 0 0;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 24px;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid #e8763e;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const UserRole = styled.span`
  font-size: 0.92rem;
  color: #888;
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: #232323;
  margin-bottom: 4px;
  text-align: left;
  cursor: pointer;
  padding: 6px 24px;
  font-size: 1rem;
  width: 100%;
  &:last-child {
    color: #e8763e;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <Brand>
          <img src="/illustration.png" alt="Tropa Digital" height={5} />
          {/* Coloque aqui, se quiser, o texto DIGITAL estilizado */}

        </Brand>
        <MenuLabel>MENU</MenuLabel>
        <Menu>
          <MenuItem>
            <FiGrid />
            Dashboard
          </MenuItem>
          <MenuItem active>
            <FiCalendar />
            Eventos
          </MenuItem>
          <MenuItem>
            <FiUsers />
            Equipes
          </MenuItem>
          <MenuItem>
            <FiClipboard />
            Inscrições
          </MenuItem>
        </Menu>
      </div>
      <Spacer />
      <UserBlock>
        <UserProfile>
          <Avatar src="/kaique.jpg" alt="Kaique Steck" />
          <UserInfo>
            <UserName>Kaique Steck</UserName>
            <UserRole>Administrador</UserRole>
          </UserInfo>
        </UserProfile>
        <SidebarButton>Alterar dados</SidebarButton>
        <SidebarButton>Sair</SidebarButton>
      </UserBlock>
    </SidebarContainer>
  );
}