import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { roles, statuses } from "../data/data";
import { User } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<User>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="ID" className="w-[20px]" />
  //   ),
  //   cell: ({ row }) => {
  //     return <div className="w-[20px]">{row.getValue("id")}</div>;
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "full_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Full Name"
        className="pl-4"
      />
    ),
    cell: ({ row }) => {
      const role = roles.find((role) => role.value === row.original.role);
      return (
        <div className="flex flex-row gap-x-4 pl-4">
          <div className="bg-slate-400 rounded-2xl size-14 flex justify-center items-center overflow-hidden">
            <img
              src={row.original.profile_picture}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-1 justify-start items-start">
            <span className="w-fit truncate font-medium ">
              {row.getValue("full_name")}
            </span>
            <div className="">
              {role && (
                <Badge
                  className={`${
                    role.value === "admin"
                      ? "bg-yl-30 text-white"
                      : role.value === "tutor"
                      ? "bg-yl-60 text-white"
                      : "bg-yl-10 text-white"
                  } w-fit`}
                >
                  {role.label}
                </Badge>
              )}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("email")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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
          className={`flex w-[100px] items-center ${
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
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
