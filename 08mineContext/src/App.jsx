
import './App.css'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'
import UserContextProvider from './assets/Context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
     <h1>React with Alok Rai</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
