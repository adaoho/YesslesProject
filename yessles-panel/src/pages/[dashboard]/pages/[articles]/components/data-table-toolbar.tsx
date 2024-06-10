import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllArticles } from "@/features/article/articleSlice";
import { toast } from "sonner";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchArticle = async () => {
    try {
      //@ts-ignore
      await dispatch(getAllArticles());
      toast.success(`Success Refresh Article`);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Cari Nama Artikel ..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={() => fetchArticle()}
        >
          <MdOutlineRefresh className="mr-2 h-4 w-4" />
          Refresh
        </Button>
        <DataTableViewOptions table={table} />
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={() => navigate("new-article")}
        >
          <AiOutlinePlus className="mr-2 h-4 w-4" />
          Add Article
        </Button>
      </div>
    </div>
  );
}
