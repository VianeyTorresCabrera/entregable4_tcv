import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './styles/userform.css'


const UserForm = ({createUser, update, updateUser, setUpdate, isShow, setIsShow}) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      reset(update)
    }, [update]);
    

    const submit = (data) =>{
        if (update) {
            //update
            updateUser('/users', update.id, data);
            console.log(`The user ${update.first_name} ${update.last_name} has been updated`);
            setUpdate();
           
        }else{
            //create
            createUser('/users', data);
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
            image_url: '',
           });    

        setIsShow(false);   
    }

    const handleClose = () =>{
        //cierre
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
            image_url:'',
           });  
        setIsShow(false);
        setUpdate();
    }

  return (
    <>
    <div className={`userform ${isShow && 'active'}`}>       
        <form className='userform_form' onSubmit={handleSubmit(submit)}>            
            <div className='userform_header'>
                <h2 className='userform_title'>
                    {
                        update ?
                            'Update User'
                            :
                            'New User'
                    }
                </h2>
                <button onClick={handleClose} className='userform_close' type='button'>X</button>
            </div>
            <div className='userform_item'>              
                <label htmlFor="first_name">First Name </label>
                <input {...register('first_name')} id='first_name' type="text" required />            
            </div>

            <div className='userform_item'>            
                <label htmlFor="last_name">Last Name </label>
                <input {...register('last_name')} id='last_name' type="text" required/>         
            </div>

             <div className='userform_item'>            
                <label htmlFor="email">Email </label>
                <input {...register('email')} id='email' type="email"  required/>            
            </div>

            <div className='userform_item'>           
                <label htmlFor="password">Password </label>
                <input {...register('password')} id='password' type="password" required />            
            </div>

            <div className='userform_item'>           
                <label htmlFor="birthday">Birthday </label>
                <input {...register('birthday')} id='birthday' type="date" required />            
            </div>

            <div className='userform_item'>           
                <label htmlFor="image_url">Image Url</label>
                <input {...register('image_url')} id='image_url' type="url" required/>            
            </div>

            <button className='userform_btn'>
                {
                    update ?
                        'Update User'
                        :
                        'Add new User' 
                   }
            </button>
        </form>
    </div>    
    </>
  )
}

export default UserForm;
