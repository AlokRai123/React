import { useState , useReducer} from 'react';
import './App.css'

function App() {

  // const [counter , setCounter] = useState(15);
  // // let number = 5;

  // const addValue = () => {
  //   console.log("number is"+ counter);
  //    setCounter(counter+1);
  // }

  // const subValue = () => {
  //   setCounter(counter-1);
  // }

  const initialState = {count :0}

  const reducer = (state,action) =>{
    switch(action.type){
      case 'increase':{
        return{count : state.count+1}
      }
      case 'decrease':{
        return{count : state.count-1}
      }
      default : {
        return state;
      }
    }
   
  }
  const [state , dispatch] = useReducer(reducer,initialState)
  

  return (
    <>
     {/* <p>Chai aur react</p> */}
     <h3>Count Click Value : {state.count}</h3>
     <button onClick={() => dispatch({type : 'increase'})}>Add button</button>
     <button onClick={() => dispatch({type : 'decrease'})}>decrease button </button>
    </>
  )
}

export default App
