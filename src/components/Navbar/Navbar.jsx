import React from 'react';
import s from './Navbar.module.css';

console.log(s);

// let s = {
//   'nav': 'Navbar_nav__ZgOPm',
//   'item':'Navbar_item__iBnkS'
//   'active':'Dhdhsjdg_activ'
// }


let c1 = "item";
let c2 = "active";

let classes = c1 +" " + c2;
let classesNew = `${s.item}${s.active}`;


const Navbar =() =>{
    return <nav className={s.nav}>
{/* Тут будем делать линки , типа ссылки какие то на страницы либо ещё что то будем делать всё дивками*/}

<div className={s.item}>
  <a href='/profile'>Profile</a>
</div>

<div className={s.item}>
  <a href='/dialogs'>Messages</a>
</div>

<div className={`${s.item}${s.active}`}>
  <a>News</a>
</div>

<div className={s.item}>
 <a>Music</a>
</div>

<div className={s.item}>
 <a>Settings</a>
</div>


    </nav>
};


export default Navbar;

