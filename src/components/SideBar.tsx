import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiGrid, FiPower, FiCalendar, FiUsers, FiUser, FiClipboard } from "react-icons/fi";

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
  color: #A3A3A3;
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
  align-items: center;
  margin-top: -7px;
`;

const MenuItem = styled(NavLink) <{ $icononly?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 180px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  color: #252525;
  background: none;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Roboto', Arial, sans-serif;
  cursor: pointer;
  margin-bottom: 2px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  svg {
    font-size: 1.17rem;
    color: #232323;
    margin-right: 4px;
  }
  &.active, &:hover {
    background: #CC6237;
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
  padding: 50px 0 0 0;
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
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
  border-radius: 35%;
  object-fit: cover;
  border: 1px solid #CC6237;
  margin-left: -10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #232323;
`;

const UserRole = styled.span`
  font-size: 0.86rem;
  color: #A3A3A3;
  font-weight: 400;
  font-size: 11px;
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  border-radius:5px;
  color: #232323;
  margin-bottom: 4px;
  text-align: left;
  cursor: pointer;
  padding: 6px 22px;
  font-size: 14px;
  width: 100%;
  &:last-child {
    color: #CC6237;
    font-weight: 500;
  }
  &:hover {
    background: #CC6237;
    color: #fff;
    svg {
      color: #fff;
    }
  }
  &:first-of-type {
    margin-bottom: 14px; /* ou o valor que desejar */
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
          <li>
            <MenuItem to="/dashboard">
              <FiGrid size={13} />
              Dashboard
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/eventos">
              <FiCalendar size={13} />
              Eventos
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/equipes">
              <FiUsers size={13} />
              Equipes
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/inscricoes">
              <FiClipboard size={13} />
              Inscrições
            </MenuItem>
          </li>
        </Menu>
      </div>
      <Spacer />
      <UserBlock>
        <UserProfile>
          <Avatar src="/user-img.png" alt="Kaique Steck" />
          <UserInfo>
            <UserName>Kaique Steck</UserName>
            <UserRole>Administrador</UserRole>
          </UserInfo>
        </UserProfile>
        <SidebarButton>
          <FiUser style={{ marginRight: 8, marginLeft: -10 }} />
          Alterar dados</SidebarButton>
        <SidebarButton>
          <FiPower style={{ marginRight: 8, marginLeft: -10 }} />
          Sair</SidebarButton>
      </UserBlock>
    </SidebarContainer>
  );
}