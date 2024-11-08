
import { useState ,useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {

   const [length, setLength] = useState(8)
   const [numAllowed , setNumAllowed] = useState(false)
   const [ characterAllowed,setCharacterAllowed] = useState(false)
   const [password, setPassword] = useState("")

   const passwordRef = useRef("null")

   const passwordGenrator = useCallback(() =>{

    let pass = ""
    let str = "ASDFGHJKLZXCVBNMPOIUYTREWQasdfghjklmnbvcxzqwertyuiop"

    if(numAllowed) str += "0123456789"
    if(characterAllowed) str += "~!@#$%^&*()-{}[]"

    for(let i =1;i<=length;i++){
      let char = Math.floor(Math.random()* str.length+1);
 
      pass += str.charAt(char);

    }

    setPassword(pass);

   },[length,numAllowed,characterAllowed,setPassword])

   const copyPasswordToClipboard = useCallback(() => {
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,20 );
     window.navigator.clipboard.writeText(password)
   },[password])

   useEffect(() => {
    passwordGenrator()
   },[length,numAllowed,characterAllowed,passwordGenrator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-8 p-4 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center p-1'> Password generater</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min= {8}
           max={20}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
           />
           <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowed} 
          id ="numberInput"
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }}
           />
           <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked ={characterAllowed}
          id='characterInput'
          onClick={() => {
            setCharacterAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
