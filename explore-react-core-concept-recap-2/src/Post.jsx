import './Post.css'
export default function Post({post}){
    // console.log(post)
    const {title, body, id, userId} =post;
    return(
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>User Id: {userId}</small></p>
            <p><small>Post Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}