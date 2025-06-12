import React, { useState, useRef } from "react";
import { FiGrid, FiPower, FiCalendar, FiUsers, FiUser, FiClipboard, FiX, FiUpload } from "react-icons/fi";
import {
  SidebarContainer,
  BrandBlock,
  Brand,
  MenuLabel,
  Menu,
  MenuItem,
  Spacer,
  UserBlock,
  UserProfile,
  Avatar,
  UserInfo,
  UserName,
  UserRole,
  SidebarButton,
  SidebarNavLink,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalSubmit,
  AvatarPreview
} from "./SideBarStyles";


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