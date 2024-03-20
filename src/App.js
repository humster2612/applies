import React  from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';




 
// Сама компонента сам файл APP  будет обозначать , что 
//  у нас есть целый квадрат , он будет отвечать для того что бы вместить все блоки в себе 
//  по типу хедера , сайдбара , контента и т.д.


const App = (props) => {
  return (
   
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>

          <div class='app_wrapper_content'>
              <Dialogs/>
          </div>
          {/*<Profile/>*/}

 </div>);
};


export default App;



