import React from 'react';
import './Profile.css';

const Profile=()=>{
    return <div className ='content'>
    <div className='contentimage'>
    <img src='https://images.wallpaperscraft.ru/image/single/avtomobil_retro_vintazh_208617_1280x720.jpg' width='100%' height='500px'/>
    </div>
    
{/* Соответственно сама платформа на которой пишеться размер поля и т.д. */}
    <div className="bar">
      {/* а тут уже именно размер кружочка , цвет , его стиль и т.д. */}
      <div className="bar_face">
        <div className="bar_face_image">
          {/* тут будет морда пользователя  */}
          <img src="https://cdn.icon-icons.com/icons2/1539/PNG/512/3289576-individual-man-people-person_107097.png" alt="" width='100px' height='100px' />

        </div>
      </div>
    </div>
    
    <div className="information">
        <div className="information_block">
          <div className="information_title">
            My post
          </div>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Alias commodi modi possimus explicabo inventore velit dolores,<br/>
             officiis expedita a perspiciatis illum deleniti. <br/>
             Enim accusantium officiis dolorem, aspernatur ipsa <br/>
            reprehenderit consequatur.<br/>
        </div>
    
    </div>
    
    <div>
      Post 1 
    </div>
    
    <div>
      Post 2 
    </div>
    
    </div>
};

export default Profile;
