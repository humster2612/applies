import React from 'react';
import s from './Post.module.css';



const Post=(props)=>{

    return (


        <div className={s.item}>
            <img src="https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png" alt="" />
            {props.massage}



            <div>
                <span>like:</span>
                {props.likesCount}
            </div>


        </div>

    )

};


export default Post;
