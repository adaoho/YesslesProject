import { useSelector } from "react-redux";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import SeoComp from "@/components/SeoComp";

const UserPanel = () => {
  const { items } = useSelector((state: any) => state.user);

  return (
    <>
      <SeoComp
        title="Yessles Users Panel"
        description="Yessles: Bimbel No. 1 di Madiun"
      />
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          style={{ width: 1280, height: 998 }}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          style={{ width: 1280, height: 998 }}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="w-full flex px-4 py-4 h-full">
        <DataTable data={items} columns={columns} />
      </div>
    </>
  );
};

export default UserPanel;
