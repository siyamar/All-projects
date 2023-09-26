import {useNavigate } from "react-router-dom"; 
const Photo = ({photo}) => {
    const{id, title, url} = photo;
    const navigate = useNavigate();
    const photoStyles = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px'
    }

    const handleShowDetail =()=>{
        navigate(`/photo/${id}`)
    }
    return (
        <div style={photoStyles}>
            <img className="size" src={url} alt="" />
            <h3>Id: {id}</h3>
            <p>Title: {title}</p>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

export default Photo;