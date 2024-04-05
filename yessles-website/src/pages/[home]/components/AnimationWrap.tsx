import { Outlet } from "react-router-dom";

const AnimationWrap = () => {
  return (
    <>
      <div className="animate-fade-up">
        <Outlet />
      </div>
    </>
  );
};

export default AnimationWrap;
