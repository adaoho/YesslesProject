import { statusesProps } from "@/pages/[dashboard]/utils/interface";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

export const statuses: statusesProps[] = [
  {
    value: "ACTIVE",
    label: "Active",
    icon: AiOutlineCheckCircle,
  },
  {
    value: "PENDING",
    label: "Pending",
    icon: BiTimeFive,
  },
  {
    value: "INACTIVE",
    label: "Inactive",
    icon: CgCloseO,
  },
];

export function filterStatuses(searchString: string): statusesProps[] {
  const lowercasedSearchString = searchString.toLowerCase();
  return statuses.filter(
    (status) => status.value.toLowerCase() === lowercasedSearchString
  );
}
