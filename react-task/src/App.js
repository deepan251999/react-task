import Lap from './components/laptop/Laptops'
import Login from './components/form/Login'
import Todolists from './components/todolist/todolists'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lap/>
      <Login/>
      <Todolists/>
    </div>
  );
}

export default App;
