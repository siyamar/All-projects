import { useLoaderData, useNavigate } from "react-router-dom";

const PhotoDetails = () => {
    const {id, title, thumbnailUrl} = useLoaderData();
    const navigate = useNavigate();

    const handleGobake=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Photo details about: {id}</h3>
            <img src={thumbnailUrl} alt="" /><br />
            <p>Title: {title}</p>
            <p><small>Website link: {thumbnailUrl}</small></p>
            <button onClick={handleGobake}>Go back</button>
        </div>
    );
};

export default PhotoDetails;