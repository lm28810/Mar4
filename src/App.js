
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Advice from './pages/Advice';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
  
      <NavBar />
      <Advice/>
      
      
{/*       
      <Routes>
        <Route path='/' element={ <TodoList/>} />
        <Route path='/advice' element={ <Advice/>} />
      </Routes>  */}
    </div>
  );
}

export default App;
