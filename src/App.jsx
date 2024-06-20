
import { useEffect, useState } from 'react';
import './App.css'
import UseCRUD from './hooks/UseCRUD';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';


//first_name, last_name, email, password, birthday

function App() {
  const [update, setUpdate] = useState();
  const [isShow, setIsShow] = useState(false);
  const[users, getUsers, createUser, deleteUser, updateUser] = UseCRUD();

  useEffect(() => {
   getUsers('/users');
  }, [])
  
  //console.log(users)

  const handleForm = () =>{
   setIsShow(true);
  }
  
  return (
   <div className='app'>
    <div className='app_header'>
      <h1 className='app_header_tittle'>USERS</h1>      
      <button className='app_header_btn' onClick={handleForm}>Create User</button>
    </div>    
    <UserForm
      createUser = {createUser}
      update = {update}
      updateUser = {updateUser}
      setUpdate = {setUpdate}
      isShow = {isShow}
      setIsShow = {setIsShow}
    />
    <div className='app_container'>
      {
        users?.map((user) => (
          <UserCard
            key = {user.id}
            user = {user}
            deleteUser = {deleteUser}
            setUpdate = {setUpdate}
            setIsShow = {setIsShow}
           />
        ))
      }
    </div>   
    
   </div>
  )
}

export default App;
