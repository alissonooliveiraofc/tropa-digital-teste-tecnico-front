import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border-radius: 18px;
  padding: 0 12px;
  height: 31px;
  font-size: 13px;
  color: #b4b4b4;
  border: 1px solid #f0f0f0;
  svg {
    margin-right: 7px;
    font-size: 15px;
  }
  input {
    border: none;
    background: transparent;
    outline: none;
    width: 120px;
    font-size: 13px;
    color: #232323;
    &::placeholder {
      color: #b4b4b4;
      font-weight: 400;
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  background: #CC6237;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0 16px 0 10px;
  height: 31px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  svg {
    margin-right: 4px;
    font-size: 17px;
  }
  &:hover {
    filter: brightness(0.97);
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 13px;
`;

export const Th = styled.th`
  text-align: left;
  color: #CC6237;
  opacity: 0.5;
  font-weight: 500;
  font-size: 13px;
  padding: 7px 0 7px 6px;
  background: transparent;
  font-family: 'Poppins';
  border-bottom: 1.5px solid #f0f0f0;
`;

export const Td = styled.td`
  padding: 7px 0 7px 6px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 13px;
  color: #657593;
  vertical-align: middle;
  &:last-child {
    text-align: right;
    padding-right: 10px;
  }
`;

export const Status = styled.span<{ $status?: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  font-size: 13px;
  color: #657593;
  font-weight: 400;
  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $status }) =>
    $status === "Inativo" ? "#e53e3e" : "#34e62f"};
  }
`;

export const ActionsButton = styled.button`
  background: none;
  border: none;
  color: #CC6237;
  cursor: pointer;
  border-radius: 6px;
  padding: 5px 6px;
  display: flex;
  align-items: center;
  &:hover {
    background: #f6e5dd;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 2px;
`;

export const PageBtn = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#CC6237" : "#f7f7f7")};
  color: ${({ active }) => (active ? "#fff" : "#232323")};
  font-weight: 500;
  border-radius: 999px;
  min-width: 32px;
  height: 32px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #CC6237;
    color: #fff;
  }
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
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

export const ActionsMenu = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 120px;
`;

export const ActionsMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: none;
  border: none;
  font-size: 0.9rem;
  color: #232323;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f7f7f7;
  }
  &.danger {
    color: #e53e3e;
  }
`;