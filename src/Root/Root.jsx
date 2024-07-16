import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;