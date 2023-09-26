import {useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts= useLoaderData();
    return (  
        <div>
            <h3>Posts: {posts.length}</h3>
            <div className="container">
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
            </div>
            
        </div>
    );
};

export default Posts;