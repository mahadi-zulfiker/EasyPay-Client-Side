import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const {user, loading} = useAuth();
    if(loading){
        return <p>loading...</p>
    }
    return (
        <div>
            overview of {user.name}
        </div>
    );
};

export default Overview;