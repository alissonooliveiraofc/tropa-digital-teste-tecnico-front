import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
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

export const BrandBlock = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Brand = styled.div`
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

export const MenuLabel = styled.div`
  color: #A3A3A3;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.3px;
  margin-bottom: 7px;
  margin-top: 13px;
  padding-left: 12px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -7px;
`;

export const MenuItem = styled(NavLink)<{ $icononly?: boolean }>`
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

export const Spacer = styled.div`
  flex: 1;
`;

export const UserBlock = styled.div`
  border-top: 1px solid #eee;
  padding: 50px 0 0 0;
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 35%;
  object-fit: cover;
  border: 1px solid #CC6237;
  margin-left: -10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #232323;
`;

export const UserRole = styled.span`
  font-size: 0.86rem;
  color: #A3A3A3;
  font-weight: 400;
  font-size: 11px;
`;

export const SidebarButton = styled.button`
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
    margin-bottom: 14px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
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

export const ModalClose = styled.button`
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

export const ModalTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #CC6237;
  font-size: 1.15rem;
  font-weight: 600;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalLabel = styled.label`
  color: #CC6237;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const ModalInput = styled.input`
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

export const ModalSubmit = styled.button`
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

export const AvatarPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 35%;
  object-fit: cover;
  border: 2px solid #CC6237;
  margin-bottom: 10px;
  margin-top: 10px;
`;