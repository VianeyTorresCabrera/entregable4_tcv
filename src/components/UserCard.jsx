import React, { useState } from 'react';
import './styles/userCard.css';
import Modal from './Modal';
import Modal2 from './Modal2';

const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {
console.log(user)

const [isOpen, setIsOpen] = useState(false);
const [message, setMessage] = useState(false);


    const handleDelete = () =>{
        setIsOpen(true);        
        //deleteUser('/users', user.id);        
    }

    const handleEdit = () =>{
        setUpdate(user);
        setIsShow(true);
    }

  return (
    <article className='usercard'>
        <Modal
            isOpen = {isOpen}
            setIsOpen = {setIsOpen}
            deleteUser = {deleteUser}
            setMessage = {setMessage}
            user = {user}                                 
        />
        <Modal2
            message = {message}
            deleteUser = {deleteUser}
            setMessage = {setMessage}            
            user = {user}
        />
        
        <div className='usercard_header'>
            <figure className='usercard_photo'>
                <img  src={user.image_url} alt="Photo"/>
            </figure>            
            <h2 className='usercard_name'>{user.first_name}  {user.last_name}</h2>            
        </div>        
        <hr />
        <ul className='usercard_list'>
            <li className='usercard_item'>
                <span>Email:  </span>
                <span>{user.email}</span>
            </li>
            <li className='usercard_item'>                
                <span>Birthday:  </span>
                <span><img src="..//assets/gift.svg" alt="birthday" />{user.birthday}</span>
            </li>
        </ul>
        <hr />
        <div className='usercard_btns'>
            <button className='usercard_btn_delete' onClick={handleDelete}><img src="..//assets/delete.svg" alt="" /></button>
            <button className='usercard_btn_update' onClick={handleEdit} ><img src="..//assets/edit.svg" alt="" /></button>
        </div>
        
    </article>
)
}
    export default UserCard;