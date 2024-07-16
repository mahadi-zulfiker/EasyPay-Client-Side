import { IoCallOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { TbCoinTakaFilled } from "react-icons/tb";

const AccountDetails = () => {
    return (
        <div className="bg-gradient-to-r from-[#472ce6] to-[#563fd8] text-white p-4 lg:p-10">
             <div className="flex justify-around">
            <div className="">
                <h1 className="font-bold md:text-3xl">Hello, Sayem Hossin</h1>
                <h1 className="flex  gap-2 items-center font-bold md:text-3xl"><MdOutlineMail /> sayemhossin@gmail.com</h1>
            </div>
            <div className="">
                <h1 className="flex gap-3 items-center md:text-3xl"><IoCallOutline /> 02836365000</h1>
            </div>
            </div>
            <hr  className="mt-5"/>
            <div className=" text-white pt-20">
                <h1 className="flex gap-3 items-center md:text-4xl font-extrabold ml-[20%]"> <IoWalletOutline />Your Wallet Balance</h1>
                
                <h1 className="flex gap-3 mt-14 justify-center items-center text-4xl md:text-6xl font-extrabold pb-10 "><TbCoinTakaFilled />654</h1>
            </div>
        </div>
    );
};

export default AccountDetails;