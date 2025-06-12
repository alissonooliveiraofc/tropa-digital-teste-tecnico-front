import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { FiSearch, FiPlus, FiMoreVertical, FiX, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

// Simulação dos dados
const initialData = [
  {
    nome: "Clube do Laço Coração Pantaneiro",
    equipes: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
  {
    nome: "Clube do Laço Coração Pantaneiro",
    equipes: 10,
    status: "Ativo",
    data: "09 a 11 de Junho",
  },
];

const columns = [
  {
    header: "Nome do evento",
    accessorKey: "nome",
    cell: (info: any) => info.getValue(),
  },
  {
    header: "Total de equipes",
    accessorKey: "equipes",
    cell: (info: any) => info.getValue(),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info: any) => (
      <Status $status={info.getValue()}>
        <span className="dot" />
        {info.getValue()}
      </Status>
    ),
  },
  {
    header: "Data",
    accessorKey: "data",
    cell: (info: any) => (
      <span style={{ color: "#CC6237" }}>{info.getValue()}</span>
    ),
  },
  {
    header: "", // Remova o botão duplicado aqui
    id: "actions",
    cell: () => null, // Deixe vazio ou remova completamente esta coluna
  },
];

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 13px;
`;

const SearchBox = styled.div`
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

const AddButton = styled.button`
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

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 13px;
`;

const Th = styled.th`
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

const Td = styled.td`
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

const Status = styled.span<{ $status?: string }>`
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

const ActionsButton = styled.button`
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

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 2px;
`;

const PageBtn = styled.button<{ active?: boolean }>`
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

const PaginationTextBtn = styled(PageBtn)`
  min-width: unset;
  padding: 0 10px;
  background: #f7f7f7;
  color: #232323;
  font-weight: 400;
  &:hover {
    background: #CC6237;
    color: #fff;
  }
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
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

const ActionsMenu = styled.div`
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

const ActionsMenuItem = styled.button`
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

export default function EventosTable() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"cadastro" | "visualizar" | "editar" | null>(null);
  const [novoEvento, setNovoEvento] = useState({
    nome: "",
    equipes: "",
    status: "Ativo",
    data: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [actionsMenuVisible, setActionsMenuVisible] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // ajuste conforme necessário
  const menuRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const paginatedRows = table.getRowModel().rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handleOpenModal(index: number | null = null) {
    setModalOpen(true);
    setModalMode("editar"); // <-- Corrigido aqui!
    setActionsMenuVisible(null);
    setEditingIndex(index);
    if (index !== null) {
      setNovoEvento(data[index]);
    } else {
      setNovoEvento({ nome: "", equipes: "", status: "Ativo", data: "" });
    }
  }

  function handleOpenCadastro() {
    setModalOpen(true);
    setModalMode("cadastro");
    setEditingIndex(null);
    setNovoEvento({ nome: "", equipes: "", status: "Ativo", data: "" });
  }

  function handleCloseModal() {
    setModalOpen(false);
    setModalMode(null);
    setEditingIndex(null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setNovoEvento({ ...novoEvento, [e.target.name]: e.target.value });
  }

  function handleSubmitCadastro(e: React.FormEvent) {
    e.preventDefault();
    if (!novoEvento.nome || !novoEvento.equipes || !novoEvento.data) return;
    const updatedData = [...data, { ...novoEvento, equipes: Number(novoEvento.equipes) }];
    setData(updatedData);
    localStorage.setItem("eventos", JSON.stringify(updatedData));
    handleCloseModal();
  }

  function handleSubmitEdicao(e: React.FormEvent) {
    e.preventDefault();
    if (editingIndex === null) return;
    const updatedData = [...data];
    updatedData[editingIndex] = { ...novoEvento, equipes: Number(novoEvento.equipes) };
    setData(updatedData);
    localStorage.setItem("eventos", JSON.stringify(updatedData));
    handleCloseModal();
  }

  function handleRemove(index: number) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("eventos", JSON.stringify(updatedData));
  }

  useEffect(() => {
    const storedData = localStorage.getItem("eventos");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Fechar o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActionsMenuVisible(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleView(index: number) {
    setModalOpen(true);
    setModalMode("visualizar");
    setEditingIndex(null);
    setNovoEvento(data[index]);
    setActionsMenuVisible(null);
  }

  return (
    <>
      <TopBar>
        <SearchBox>
          <FiSearch />
          <input
            placeholder="Buscar eventos"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const storedData = localStorage.getItem("eventos");
              const allData = storedData ? JSON.parse(storedData) : initialData;
              const filteredData = allData.filter((evento: any) =>
                evento.nome.toLowerCase().includes(searchTerm)
              );
              setData(filteredData);
            }}
          />
        </SearchBox>
        <AddButton onClick={handleOpenCadastro}>
          <FiPlus />
          Inserir novo
        </AddButton>
      </TopBar>

      <Table>
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '3%' }} />
        </colgroup>
        <thead>
          <tr>
            {table.getFlatHeaders().map(header => (
              <Th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row, rowIndex) => (
            <tr key={row.id}>
              {row.getAllCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
              <Td>
                <ActionsButton onClick={() => setActionsMenuVisible(rowIndex + (currentPage - 1) * itemsPerPage)}>
                  <FiMoreVertical />
                </ActionsButton>
                {actionsMenuVisible === rowIndex + (currentPage - 1) * itemsPerPage && (
                  <ActionsMenu ref={menuRef}>
                    <ActionsMenuItem onClick={() => handleView(rowIndex + (currentPage - 1) * itemsPerPage)}>
                      <FiEye /> Visualizar
                    </ActionsMenuItem>
                    <ActionsMenuItem onClick={() => handleOpenModal(rowIndex + (currentPage - 1) * itemsPerPage)}>
                      <FiEdit2 /> Editar
                    </ActionsMenuItem>
                    <ActionsMenuItem
                      className="danger"
                      onClick={() => handleRemove(rowIndex + (currentPage - 1) * itemsPerPage)}
                    >
                      <FiTrash2 /> Remover
                    </ActionsMenuItem>
                  </ActionsMenu>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <PageBtn
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </PageBtn>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageBtn
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </PageBtn>
        ))}
        <PageBtn
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Próxima
        </PageBtn>
      </Pagination>

      {/* MODAL DE CADASTRO */}
      {isModalOpen && modalMode === "cadastro" && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={handleCloseModal}><FiX /></ModalClose>
            <ModalTitle>Cadastrar novo evento</ModalTitle>
            <ModalForm onSubmit={handleSubmitCadastro}>
              <ModalLabel>Nome</ModalLabel>
              <ModalInput
                name="nome"
                value={novoEvento.nome}
                onChange={handleChange}
                placeholder="Nome do evento"
                required
              />
              <ModalLabel>Total de equipes</ModalLabel>
              <ModalInput
                name="equipes"
                type="number"
                min={1}
                value={novoEvento.equipes}
                onChange={handleChange}
                placeholder="Quantidade"
                required
              />
              <ModalLabel>Status</ModalLabel>
              <select
                name="status"
                value={novoEvento.status}
                onChange={handleChange}
                style={{
                  padding: "7px 10px",
                  borderRadius: 6,
                  border: "1px solid #e0e0e0",
                  fontSize: "1rem",
                  background: "#f6f6f6",
                }}
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
              <ModalLabel>Data</ModalLabel>
              <ModalInput
                name="data"
                value={novoEvento.data}
                onChange={handleChange}
                placeholder="Ex: 09 a 11 de Junho"
                required
              />
              <ModalSubmit type="submit">Cadastrar</ModalSubmit>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* MODAL DE VISUALIZAR */}
      {isModalOpen && modalMode === "visualizar" && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={handleCloseModal}><FiX /></ModalClose>
            <ModalTitle>Visualizar evento</ModalTitle>
            <p><strong>Nome:</strong> {novoEvento.nome}</p>
            <p><strong>Total de equipes:</strong> {novoEvento.equipes}</p>
            <p><strong>Status:</strong> {novoEvento.status}</p>
            <p><strong>Data:</strong> {novoEvento.data}</p>
            <ModalSubmit onClick={handleCloseModal}>OK</ModalSubmit>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* MODAL DE EDIÇÃO */}
      {isModalOpen && modalMode === "editar" && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={handleCloseModal}><FiX /></ModalClose>
            <ModalTitle>Editar evento</ModalTitle>
            <ModalForm onSubmit={handleSubmitEdicao}>
              <ModalLabel>Nome</ModalLabel>
              <ModalInput
                name="nome"
                value={novoEvento.nome}
                onChange={handleChange}
                placeholder="Nome do evento"
                required
              />
              <ModalLabel>Total de equipes</ModalLabel>
              <ModalInput
                name="equipes"
                type="number"
                min={1}
                value={novoEvento.equipes}
                onChange={handleChange}
                placeholder="Quantidade"
                required
              />
              <ModalLabel>Status</ModalLabel>
              <select
                name="status"
                value={novoEvento.status}
                onChange={handleChange}
                style={{
                  padding: "7px 10px",
                  borderRadius: 6,
                  border: "1px solid #e0e0e0",
                  fontSize: "1rem",
                  background: "#f6f6f6",
                }}
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
              <ModalLabel>Data</ModalLabel>
              <ModalInput
                name="data"
                value={novoEvento.data}
                onChange={handleChange}
                placeholder="Ex: 09 a 11 de Junho"
                required
              />
              <ModalSubmit type="submit">Salvar alterações</ModalSubmit>
            </ModalForm>
          </ModalContent >
        </ModalOverlay >
      )}
    </>
  );
}