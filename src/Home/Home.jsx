import AccountDetails from "../Share/AccountDetails/AccountDetails";
import Navbar from "../Share/Navbar/Navbar";
import Services from "../Share/Services/Services";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AccountDetails></AccountDetails>
            <Services></Services>
        </div>
    );
};

export default Home;