import styled from "styled-components";
import { FiGrid, FiCalendar, FiUsers, FiClipboard } from "react-icons/fi";

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  padding: 15px;
  width: 210px;
  height: 100dvh;
  background: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', Arial, sans-serif;
`;

const BrandBlock = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 10px;
  margin-bottom: 22px;
  img {
    height: 24.91px;
    width: 161px;
  }
`;

const MenuLabel = styled.div`
  color: #b4b4b4;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.3px;
  margin-bottom: 7px;
  margin-top: 13px;
  padding-left: 12px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 3px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  margin-top: -7px;
`;

const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 180px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  color: ${({ active }) => (active ? "#fff" : "#252525")};
  background: ${({ active }) => (active ? "#e8763e" : "none")};
  font-weight: 500px;
  font-size: 14px;
  font-family: 'Roboto', Arial, sans-serif;
  cursor: pointer;
  margin-bottom: 2px;
  transition: background 0.15s, color 0.15s;
  svg {
    font-size: 1.17rem;
    color: ${({ active }) => (active ? "#fff" : "#b4b4b4")};
    margin-right: 4px;
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
  padding: 19px 0 0 0;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid #e8763e;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 700;
  font-size: 0.97rem;
  color: #232323;
  margin-bottom: 1.5px;
`;

const UserRole = styled.span`
  font-size: 0.86rem;
  color: #b4b4b4;
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: #77625c;
  margin-bottom: 4px;
  text-align: left;
  cursor: pointer;
  padding: 6px 22px;
  font-size: 0.97rem;
  width: 100%;
  &:last-child {
    color: #e8763e;
    font-weight: 600;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <BrandBlock>
          <Brand>
            <img src="/illustration.png" alt="Tropa Digital" />
          </Brand>
          <MenuLabel>MENU</MenuLabel>
        </BrandBlock>
        <Menu>
          <MenuItem>
            <FiGrid color="#252525" size={13} />
            Dashboard
          </MenuItem>
          <MenuItem active>
            <FiCalendar color="#252525" size={13} />
            Eventos
          </MenuItem>
          <MenuItem>
            <FiUsers color="#252525" size={13} />
            Equipes
          </MenuItem>
          <MenuItem>
            <FiClipboard color="#252525" size={13} />
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