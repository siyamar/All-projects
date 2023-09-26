import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])

    return (
        
        <div className="">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    )
}

/*
1. Create State to Store Data
2. Create use effect with no dependencies.
3. Use featch to load data
*/ 

//similer in look different in data