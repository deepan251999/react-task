import Lap from './components/laptop/Laptops'
import Login from './components/form/Login'
import Todolists from './components/todolist/todolists'
import './App.css';
import {useState,useEffect} from "react"

function App() {
  const [login,setLogin]=useState('');
  const logHandler=(deep)=>{
    setLogin(deep);
  }
  useEffect(()=>{
    setLogin(false);
  },[])

  return (
    <div className="App">
      {!login && <Login isLogin={logHandler}/> }
      {login && <Lap/>}  
      {/* <Todolists/> */}
    </div>
  );
}

export default App;
