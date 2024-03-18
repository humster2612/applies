import React  from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

 
// Сама компонента сам файл APP  будет обозначать , что 
//  у нас есть целый квадрат , он будет отвечать для того что бы вместить все блоки в себе 
//  по типу хедера , сайдбара , контента и т.д.


const App = () => {
  return (
   
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Profile/>
 </div>);
};


export default App;



