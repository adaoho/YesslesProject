import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  articleChangeStatus,
  articleDelete,
} from "@/features/article/articleSlice";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  className: string;
}

export function DataTableRowActions<TData>(
  //@ts-ignore
  { row, className }: DataTableRowActionsProps<TData>
) {
  // @ts-ignore
  const articleTitle = row.original.title;
  // @ts-ignore
  const idArticle = row.original.id;

  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [changeStatus, setChangeStatus] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const onChange = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(articleChangeStatus(status, id, navigate, articleTitle));
    setChangeStatus(!changeStatus);
  };

  const onDelete = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(articleDelete(id, articleTitle));
    setDeleteOpen(!deleteOpen);
  };

  return (
    <>
      <div className={className}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            {userData.role === "admin" && (
              <DropdownMenuItem onClick={() => setChangeStatus(!changeStatus)}>
                Change Status
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={() =>
                //@ts-ignore
                navigate("/articles/edit-article/" + row.original.slug)
              }
            >
              Edit Article
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => setDeleteOpen(!deleteOpen)}
            >
              Delete
              {/* <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog open={changeStatus} onOpenChange={setChangeStatus}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Status</DialogTitle>
            <DialogDescription>
              Select a new status for article "<b>{articleTitle}</b>"
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e: any) => onChange(e, idArticle)}>
            <Select
              onValueChange={(value) => {
                setStatus(value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="INACTIVE">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <DialogFooter className="mt-4">
              <Button type="submit">Ubah Status</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog for Delete User */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Article</DialogTitle>
            <DialogDescription>
              Are you sure to delete Article "<b>{articleTitle}</b>"?
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-3"></div>
          <DialogFooter>
            <Button type="submit" onClick={() => setDeleteOpen(!deleteOpen)}>
              Go Back
            </Button>
            <Button
              className="bg-red-700 hover:bg-red-600"
              type="submit"
              onClick={(e: any) => onDelete(e, idArticle)}
            >
              Yes, Sure
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
