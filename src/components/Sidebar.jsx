import { SiRazorpay } from "react-icons/si";
import SidebarContainer from './SidebarContainer';
import { SidebarItem } from './SidebarItem';
import { MdHistory, MdLogout, MdOutlineHome } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <SidebarContainer
            headingIcon={<SiRazorpay className="text-blue-600 w-6 h-6 mr-3 sm:h-9" />}
            heading={"Easy Pay"}>

            {/* normal user */}
            <>
                <SidebarItem
                    icon={<MdOutlineHome className="PEIcon" />}
                    text={"Overview"} to={"/"}
                />
                <SidebarItem
                    icon={<LuSend className="PEIcon" />}
                    text={"Send Money"} to={"/"}
                />
                <SidebarItem
                    icon={<BsCashCoin className="PEIcon" />}
                    text={"Cash In"} to={"/"}
                />
                <SidebarItem
                    icon={<PiHandCoins className="PEIcon" />}
                    text={"Cash Out"} to={"/"}
                />
                <SidebarItem
                    icon={<MdHistory className="PEIcon" />}
                    text={"Transactions"} to={"/"}
                />
            </>

            {/* agent user */}
            {/* <>
                <SidebarItem
                    icon={<MdOutlineHome className="PEIcon" />}
                    text={"Overview"} to={"/"}
                />
                <SidebarItem
                    icon={<BsCashCoin className="PEIcon" />}
                    text={"Cash In Request"} to={"/"}
                />
                <SidebarItem
                    icon={<PiHandCoins className="PEIcon" />}
                    text={"Cash Out Request"} to={"/"}
                />
                <SidebarItem
                    icon={<MdHistory className="PEIcon" />}
                    text={"Transactions"} to={"/"}
                />
            </> */}

            {/* Admin */}
            {/* <>
                <SidebarItem
                    icon={<HiOutlineUsers className="PEIcon" />}
                    text={"Manage Users"} to={"/"}
                />
                <SidebarItem
                    icon={<MdHistory className="PEIcon" />}
                    text={"Transactions"} to={"/"}
                />
            </> */}

            <SidebarItem
                icon={<MdLogout className="PEIcon" />}
                text={"Logout"} to={"/"}
            />

        </SidebarContainer>
    );
};

export default Sidebar;