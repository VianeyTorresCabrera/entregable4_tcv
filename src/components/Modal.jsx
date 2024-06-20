import React, { useState } from 'react';


const Modal = ({isOpen, setIsOpen, deleteUser, user, setMessage}) => {  

  const handleAccept = () =>{
     //
     //deleteUser('/users', user.id);
     setIsOpen(false);  
     setMessage(true);   
  }

  const handleDelete = () =>{
     //
     setIsOpen();
    
  }
  return (
    <article className={`modal ${isOpen && 'active'}`}>      
      <div className='modal_back'>
        <img src="..//assets/alert.gif" alt="eliminar" />
        <h3 className='modal_tittle'>Do you want to delete {user.first_name} {user.last_name}?</h3>
        <div className='modal_container'>
          <button onClick={handleAccept} className='modal_btn'>Accept</button>
          <button onClick={handleDelete} className='modal_btn'>Cancel</button>
        </div>
      </div>
    </article>
  )
}

export default Modal;