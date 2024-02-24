"use client"

import { ColumnDef } from "@tanstack/react-table"
// import { CellAction } from "./cell-action"

export type CustomersColumn = {
  id: string,
  name: string,
  email: string,
}

export const columns: ColumnDef<CustomersColumn>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => <CellAction data={row.original} />,
  // }
]