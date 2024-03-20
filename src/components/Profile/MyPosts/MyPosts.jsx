import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts=()=>{
    return (
<div>My Posts
    <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
    </div>

<div className = {s.posts}>
    <Post message='Hi,how are you?' likesCount='0' />
    <Post message="It's my firs project" likesCount ='25'/>
</div>

    </div> 
 )


};

export default MyPosts;
