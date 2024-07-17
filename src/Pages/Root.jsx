import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="h-screen overflow-hidden overflow-y-scroll w-full bg-gray-100 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;