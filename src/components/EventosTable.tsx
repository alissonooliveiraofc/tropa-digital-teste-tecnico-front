import styled from "styled-components";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { FiSearch, FiPlus, FiMoreVertical } from "react-icons/fi";

// Simulação dos dados
const data = [
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
      <Status>
        <span className="dot" />
        {info.getValue()}
      </Status>
    ),
  },
  {
    header: "Data",
    accessorKey: "data",
    cell: (info: any) => (
      <span style={{ color: "#e8763e" }}>{info.getValue()}</span>
    ),
  },
  {
    header: "",
    id: "actions",
    cell: () => (
      <ActionsButton>
        <FiMoreVertical />
      </ActionsButton>
    ),
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
  background: #e8763e;
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
  // margin-left: 240px;
  width: 85%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 13px;
`;

const Th = styled.th`
  text-align: left;
  color: #e8763e;
  font-weight: 500;
  font-size: 13px;
  padding: 7px 0 7px 6px;
  background: transparent;
  border-bottom: 1.5px solid #f0f0f0;
`;

const Td = styled.td`
  padding: 7px 0 7px 6px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 13px;
  color: #232323;
  vertical-align: middle;
  // width: 20%;
  &:last-child {
    text-align: right;
    padding-right: 10px;
  }
`;

const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  font-size: 13px;
  color: #4caf50;
  font-weight: 500;
  .dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #34e62f;
    border-radius: 50%;
  }
`;

const ActionsButton = styled.button`
  background: none;
  border: none;
  color: #c77c43;
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
  background: ${({ active }) => (active ? "#e8763e" : "#f7f7f7")};
  color: ${({ active }) => (active ? "#fff" : "#232323")};
  font-weight: 500;
  border-radius: 999px;
  min-width: 32px;
  height: 32px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #e8763e;
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
    background: #e8763e;
    color: #fff;
  }
`;

export default function EventosTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TopBar>
        <SearchBox>
          <FiSearch />
          <input placeholder="Buscar eventos" />
        </SearchBox>
        <AddButton>
          <FiPlus />
          Inserir novo
        </AddButton>
      </TopBar>
      <Table>
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getAllCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <PaginationTextBtn>Anterior</PaginationTextBtn>
        <PageBtn active>1</PageBtn>
        <PageBtn>2</PageBtn>
        <PageBtn>3</PageBtn>
        <PaginationTextBtn>Próxima</PaginationTextBtn>
      </Pagination>
    </>
  );
}