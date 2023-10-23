
import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers"
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table';
import {CardModalInfo} from "../components/cards/CardModalInfo";


export const TableUsers = () => {

  const { users, viewModal, setViewModal } = useUsers();
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");


  useEffect(() => {
    setData(users);
  }, [users])


  const columns = [
    {
      accessorKey: "id",
      header: "Id"
    },
    {
      accessorKey: "name",
      header: "name"
    },
    {
      accessorKey: "username",
      header: "username"
    },
    {
      accessorKey: "email",
      header: "email"
    },
    {
      accessorKey: "phone",
      header: "phone"
    }
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering
    },
    onGlobalFilterChange: setFiltering
  })

  console.log(table.getHeaderGroups());
  console.log("f")
  return (
    <div className="min-h-screen h-full w-full max-w-screen-2xl flex flex-col">
      <h1 className="text-white mt-8 mb-2 text-center text-4xl">Tabla de Usuarios</h1>
      <div className="py-5 px-5 rounded-md text-white my-10 mx-3 md:mx-10  bg-light">
        <div className="py-2">
          <button className="text-lg mr-3">Buscar</button>
          <input className="shadow appearance-none rounded-md p-1 text-dark" type="text" placeholder="Ingrese Su busqueda..." value={filtering}
            onChange={(e) => setFiltering(e.target.value)} />
        </div>
        <div className="overflow-hidden overflow-x-auto">
          <table className="table-auto w-full">

            <thead>
              {
                table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th className="text-lg pb-2" key={header.id}>
                        {header.isPlaceholder ? null :
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </th>
                    ))}
                  </tr>
                ))
              }
            </thead>
            <tbody>
              {
                table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td className="text-center py-2 border" key={cell.id}>
                        {
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        }
                      </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
      {
        viewModal && <CardModalInfo />
      }
      
    </div>
  )
}
