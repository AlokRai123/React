import React, {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const[username,setUserName] = useState('')
    const[password,setPassWord] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) =>{

      e.preventDefault()
      setUser({username,password})

    }
  return (
    <div>
      <div>
         <h2>Login</h2>
         <input 
         value={username}
         onChange={(e) => setUserName(e.target.value)}
          type="text" placeholder='Username' />
         <input 
           value={password}
           onChange={(e) => setPassWord(e.target.value)}
         type="text" placeholder='Enter Password' />
         <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
