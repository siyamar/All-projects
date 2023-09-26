import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const{id, name, website}=user;
    return (
        <div>
            <h3>User Details About: {id}</h3>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;