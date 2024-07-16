import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-[#472ce6] to-[#563fd8] text-white p-4 md:p-10">
            <div className="flex mx-5 lg:mx-20 justify-between">
                <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">S Pay</h1>
               <Link to="/register"> <h1 className=" text-xl text-black font-bold p-2 lg:p-4 hover:bg-yellow-500 bg-yellow-400">Register</h1></Link>
            </div>
           
        </div>
    );
};

export default Navbar;