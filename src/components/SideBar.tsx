import React, { useState, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiGrid, FiPower, FiCalendar, FiUsers, FiUser, FiClipboard, FiX, FiUpload } from "react-icons/fi";

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

const SidebarNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  border-radius:5px;
  color: #CC6237;
  font-weight: 500;
  margin-bottom: 4px;
  text-align: left;
  cursor: pointer;
  padding: 6px 22px;
  font-size: 14px;
  width: 100%;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  svg {
    margin-right: 8px;
    margin-left: -10px;
  }
  &:hover {
    background: #CC6237;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  max-width: 95vw;
  box-shadow: 0 6px 32px rgba(0,0,0,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ModalClose = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: #CC6237;
  cursor: pointer;
  z-index: 1;
`;

const ModalTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #CC6237;
  font-size: 1.15rem;
  font-weight: 600;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalLabel = styled.label`
  color: #CC6237;
  font-weight: 500;
  font-size: 0.95rem;
`;

const ModalInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  background: #f7f7f7;
  &:focus {
    border-color: #CC6237;
    outline: none;
  }
`;

const ModalSubmit = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #CC6237;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.96);
  }
`;

const AvatarPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 35%;
  object-fit: cover;
  border: 2px solid #CC6237;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export default function Sidebar({ onUserChange }: { onUserChange?: (name: string, avatar: string) => void }) {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "Kaique Steck");
  const [userAvatar, setUserAvatar] = useState(() => localStorage.getItem("userAvatar") || "/user-img.png");
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleOpenProfileModal() {
    setProfileModalOpen(true);
  }

  function handleCloseProfileModal() {
    setProfileModalOpen(false);
    setNewAvatar(null);
  }

  // Atualiza localStorage e propaga para o componente pai
  function handleProfileSubmit(e: React.FormEvent) {
    e.preventDefault();
    let avatarToSave = userAvatar;
    if (newAvatar) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === "string") {
          avatarToSave = ev.target.result;
          setUserAvatar(ev.target.result);
          localStorage.setItem("userAvatar", ev.target.result);
          if (onUserChange) onUserChange(userName, ev.target.result);
        }
      };
      reader.readAsDataURL(newAvatar);
    } else {
      if (onUserChange) onUserChange(userName, avatarToSave);
    }
    setUserName(userName);
    localStorage.setItem("userName", userName);
    setProfileModalOpen(false);
    setNewAvatar(null);
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setNewAvatar(e.target.files[0]);
    }
  }

  // Atualiza nome/foto ao abrir a sidebar (caso altere em outro local)
  React.useEffect(() => {
    setUserName(localStorage.getItem("userName") || "Kaique Steck");
    setUserAvatar(localStorage.getItem("userAvatar") || "/user-img.png");
  }, []);

  return (
    <>
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
            <Avatar src={newAvatar ? URL.createObjectURL(newAvatar) : userAvatar} alt={userName} />
            <UserInfo>
              <UserName>{userName}</UserName>
              <UserRole>Administrador</UserRole>
            </UserInfo>
          </UserProfile>
          <SidebarButton onClick={handleOpenProfileModal}>
            <FiUser style={{ marginRight: 8, marginLeft: -10 }} />
            Alterar dados
          </SidebarButton>
          <SidebarNavLink to="/" >
            <FiPower />
            Sair
          </SidebarNavLink>
        </UserBlock>
      </SidebarContainer>

      {isProfileModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={handleCloseProfileModal}><FiX /></ModalClose>
            <ModalTitle>Alterar dados do usuário</ModalTitle>
            <ModalForm onSubmit={handleProfileSubmit}>
              <ModalLabel>Foto</ModalLabel>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <AvatarPreview src={newAvatar ? URL.createObjectURL(newAvatar) : userAvatar} alt="Avatar" />
                <ModalSubmit
                  type="button"
                  style={{ padding: "8px 12px", background: "#eee", color: "#CC6237", fontWeight: 500 }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FiUpload style={{ marginRight: 6 }} />
                  Trocar foto
                </ModalSubmit>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleAvatarChange}
                />
              </div>
              <ModalLabel>Nome</ModalLabel>
              <ModalInput
                name="nome"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Nome do usuário"
                required
              />
              <ModalSubmit type="submit">Salvar alterações</ModalSubmit>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}