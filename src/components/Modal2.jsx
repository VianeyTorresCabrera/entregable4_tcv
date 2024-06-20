import React from 'react';

const Modal2 = ({user, message, setMessage, deleteUser}) => {

  const handleClose =() =>{    
    deleteUser('/users', user.id);
    setMessage(false);
    }

  return (
    <article className={`modal2 ${message && 'active'}`}> 
        <div className='modal2_container'>       
            <img src="..//assets/delete.gif" alt="" />
            <h3 className='modal2_title'>You have deleted {user.first_name} {user.last_name} </h3>
            <button className='modal2_btn' onClick={handleClose}>Close</button>
        </div>
    </article>
  )
}

export default Modal2;