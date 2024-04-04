import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';




console.log(s);

// let s = {
//   'nav': 'Navbar_nav__ZgOPm',
//   'item':'Navbar_item__iBnkS'
//   'active':'Dhdhsjdg_activ'
// }


//
// let c1 = "item";
// let c2 = "active";
//
// let classes = c1 +" " + c2;
// let classesNew = `${s.item}${s.active}`;


const Navbar =() =>{
    return (
    <nav className={s.nav}>
        {/* Тут будем делать линки , типа ссылки какие то на страницы либо ещё что то будем делать всё дивками*/}

        <div className={s.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>

        <div className={`${s.item} ${s.active}`}>
            <NavLink to ='/dialogs'>Messages</NavLink>
        </div>

        <div className={`${s.item}${s.active}`}>
            <NavLink to = '/news'>News</NavLink>
        </div>

        <div className={`${s.item}${s.active}`}>
            <NavLink to = '/music'>Music</NavLink>
        </div>

        <div className={`${s.item}${s.active}`}>
            <NavLink to = '/settings'>Settings</NavLink>
        </div>


    </nav>
    )
};




export default Navbar;

