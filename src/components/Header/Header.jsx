import React  from 'react';
import s from './Header.module.css';


const Header = () =>{
    return  <header className ={s.header}>

        {/* В хедере сделаем типа лого типа будет какая то картинка  */}
        <img src='https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png' width='100px' height='100px'/>

    </header>


};

export default Header;

