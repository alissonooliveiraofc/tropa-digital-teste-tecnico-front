import {
  Table,
  Th,
  Td,
  TopBar,
  SearchBox,
  AddButton,
  ActionsButton,
  ActionsMenu,
  ActionsMenuItem,
  Status,
  Pagination,
  PageBtn,
  ModalOverlay,
  ModalContent,
  ModalClose,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalSubmit,
} from "./EventosTable.styles";
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
    cell: (info: { getValue: () => string }) => info.getValue(),
  },
  {
    header: "Total de equipes",
    accessorKey: "equipes",
    cell: (info: { getValue: () => number }) => info.getValue(),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info: { getValue: () => string }) => (
      <Status $status={info.getValue()}>
        <span className="dot" />
        {info.getValue()}
      </Status>
    ),
  },
  {
    header: "Data",
    accessorKey: "data",
    cell: (info: { getValue: () => string }) => (
      <span style={{ color: "#CC6237" }}>{info.getValue()}</span>
    ),
  },
  {
    header: "",
    id: "actions",
    cell: () => null,
  },
];



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
      setNovoEvento({
        ...data[index],
        equipes: data[index].equipes.toString(),
      });
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
    setNovoEvento({
      ...data[index],
      equipes: data[index].equipes.toString(),
    });
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
              const filteredData = allData.filter((evento: { nome: string; equipes: number; status: string; data: string }) =>
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