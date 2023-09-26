import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <h3>Meal Khabe Sobay</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Headers;