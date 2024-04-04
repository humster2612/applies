import React from 'react';
// import s from './Profile.module.css'; // This line seems to be causing an error
// import MyPosts from './MyPosts/MyPosts';
import profileInfoStyles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            {/* Here is some avatar and information */}
            <div>
                <img src='https://images.wallpaperscraft.ru/image/single/avtomobil_retro_vintazh_208617_1280x720.jpg' width='100%' height='500px' alt='avatar' />
            </div>

            <div className={profileInfoStyles.descriptionBlock}> {/* Use profileInfoStyles for className */}
                ava+description
            </div>
        </div>
    );
};




export default ProfileInfo;
