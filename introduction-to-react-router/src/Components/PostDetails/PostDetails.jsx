import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const {id, title, body} = useLoaderData();
    const navigate = useNavigate();

    const handleGobake=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGobake}>Go back</button>
        </div>
    );
};

export default PostDetails;