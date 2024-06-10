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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  userChangeUpdate,
  userChangeStatus,
  userDelete,
} from "@/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>(
  //@ts-ignore
  { row }: DataTableRowActionsProps<TData>
) {
  const { userData } = useSelector((state: any) => state.user);
  // @ts-ignore
  const emailUser = row.original.email;
  // @ts-ignore
  const idUser = row.original.id;
  // @ts-ignore
  const idEmail = row.original.email;
  // @ts-ignore
  const idFullName = row.original.full_name;
  // @ts-ignore
  const idRole = userData.role;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [fullName, setFullName] = useState<string>(idFullName);
  const [filePhoto, setFilePhoto] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(userChangeStatus(status, id, navigate, idEmail));
    setChangeStatus(!changeStatus);
  };

  const onEdit = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // console.log(fullName, "from submit");
    // console.log(filePhoto, "from submit");
    // @ts-ignore
    dispatch(userChangeUpdate(fullName, id, filePhoto, idEmail, idRole));
    setEditOpen(!editOpen);
    setFullName(idFullName);
    setFilePhoto("");
  };

  const onDelete = (e: React.FormEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(userDelete(id, idEmail));
    setDeleteOpen(!deleteOpen);
  };

  const onChangeFile = (e: any) => {
    let fileSize = e.target.files[0].size;
    let fileType = e.target.files[0].type.split("/")[0];
    let file = e.target.files[0];

    fileType !== "image"
      ? toast.error("Only Upload Image")
      : fileSize > 200000
      ? toast.error("Maximum File Size 200kb")
      : setFilePhoto(file);
  };

  const handleOpenChange = (isOpen: any) => {
    setEditOpen(isOpen);
    if (!isOpen) setFullName(idFullName);
    setFilePhoto("");
  };

  return (
    <>
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
          <DropdownMenuItem onClick={() => setChangeStatus(!changeStatus)}>
            Change Status
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditOpen(!editOpen)}>
            Edit Profile
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

      <Dialog open={changeStatus} onOpenChange={setChangeStatus}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Status</DialogTitle>
            <DialogDescription>
              Select a new status for <b>{emailUser}</b>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e: any) => onChange(e, idUser)}>
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

      {/* Dialog for Edit Profile */}
      <Dialog open={editOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Change User Profile for <b>{emailUser}</b>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              onChange={(e: any) => {
                setFullName(e.target.value);
              }}
              id="name"
              defaultValue={idFullName}
              className="col-span-3"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Profile Picture</Label>
            <Input id="picture" type="file" onChange={onChangeFile} />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={(e: any) => onEdit(e, idUser)}>
              Update User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog for Delete User */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Profile</DialogTitle>
            <DialogDescription>
              Are you sure delete Profile for <b>{emailUser}</b>?
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
              onClick={(e: any) => onDelete(e, idUser)}
            >
              Yes, Sure
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
