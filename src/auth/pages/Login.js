import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { types } from '../types/types'



export const Login= () => {
  const navigate = useNavigate() 
  const { login } = useContext( AuthContext )

  const action = {
    type: types.login,
    payload: { name: 'Felipe' }
  }
  
  const handlelogin = () => {
    login("Felipe")
    /*dispatch(action);
    const lastPath = localStorage.getItem('lastPath') || '/marvel'; 
    navigate(lastPath, {
        replace: true
    });*/
    navigate("/", {
      replace: true
  })
    
}
  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr></hr>
      <button className='btn btn-primary' onClick={handlelogin}>Login</button>
    </div>
  )
}
