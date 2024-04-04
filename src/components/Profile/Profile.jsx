import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo  from "./ProfileInfo/ProfileInfo";



const Profile=()=>{
    return <div >
    <div className='contentimage'>
    <img src='https://images.wallpaperscraft.ru/image/single/avtomobil_retro_vintazh_208617_1280x720.jpg' width='100%' height='500px'/>
    </div>
    
<div>
    ava+description
</div>
<MyPosts/>

</div>


};



export default Profile;
