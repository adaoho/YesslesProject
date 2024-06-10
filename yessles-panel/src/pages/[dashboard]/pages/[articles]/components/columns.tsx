import { ColumnDef } from "@tanstack/react-table";

import { statuses } from "../data/data";
import { Article } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "thumbnail",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Thumbnail "
        className="pl-4"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-x-4 pl-4">
          <div className="bg-slate-400 rounded-lg flex justify-center items-center overflow-hidden w-full h-[80px]">
            <img
              src={row.original.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1 justify-start items-start">
          <span className="truncate font-medium capitalize text-wrap">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-start flex-col">
          <p className="font-medium">{row.original.User.full_name}</p>
          <p className="text-gray-400 text-[13px]">{row.original.User.email}</p>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div
          className={`flex items-center ${
            status.value === "ACTIVE"
              ? "text-yl-10"
              : status.value === "PENDING"
              ? "text-yellow-500"
              : "text-red-500"
          } `}
        >
          {status.icon && <status.icon className="mr-2 h-4 w-4" />}

          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" className="pr-4" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} className="pr-3" />,
  },
];
