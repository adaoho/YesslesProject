import { useSelector } from "react-redux";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

const UserPanel = () => {
  const { items } = useSelector((state: any) => state.user);

  return (
    <>
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
