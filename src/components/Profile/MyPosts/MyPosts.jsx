import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts=()=>{
    return (

        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>

            </div>

            <div className = {s.posts}>
                <Post message='Hi,how are you?' likesCount='0' />
                <Post message="It's my firs project" likesCount ='25'/>
            </div>

        </div>
    )

    
};

export default MyPosts;
