import { Outlet } from "react-router-dom";
import Navber from "../Components/Shared/Navber";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins    ">
      <Navber></Navber>
      <div className="pt-[138px] min-h-[calc(100vh)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
