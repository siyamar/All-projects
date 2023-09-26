import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    
    const userStyle ={
        border: '2px solid yellow',
        padding: '10px',
        borderRadious: '10px'
    }
    return (
        
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <Link to={`/users/${id}`}><button>User Details</button></Link>
        </div>
    );
};

export default User;