import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@radix-ui/react-icons";

export const roles = [
  {
    value: "tutor",
    label: "Yess Tutor",
  },
  {
    value: "student",
    label: "Yess Student",
  },
  {
    value: "admin",
    label: "Yess Admin",
  },
];

export const statuses = [
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

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
