import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem =(props) =>{

    let path = "/dialogs/" + props.id;


    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props)=>{
    return <div className ={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    // когда мы щас будем создавать айдишники , то мы будем
    // писать им самим числа , но потом когда у нас будут базы данных
    // тогда нам они будут подаваться из сервера , ну а пока что так только
    // сейчас здесь мы создаём пока что обьекты которые будем подключать к
    // диалогам и сообщениямnn
    // Делать мы будем это ерез пропсы


    let dialogsData = (props) = [

        {id: '1', name: 'Kubik'},
        {id: '2', name: 'Czubi'},
        {id: '3', name: 'Burulka'},
        {id: '4', name: 'Bobik'}

    ]

    let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>]




    let messageData = (props) = [
        {id: '1', message: 'HI'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Yoooo'},
        {id: '4', message: 'Yoooo'}

    ]

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {
                
                    {dialogsElements}
            }

            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>

            </div>

        </div>


    )

    
};


export default Dialogs;




