import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Search from './components/Search';
import Classify from './components/Classify';
import { useSelector } from 'react-redux';
import { selectTodos, selectSearch } from './redux/selectors';


const App = () => {
  const todolist = useSelector(selectTodos);
  const searchText = useSelector(selectSearch);
  // const filter = useSelector(selectFilter);
  return (
    <div className="App">
      {todolist.length === 0 ? (<Header />) :
        (<div>
          <Search todolist={todolist} searchText={searchText}/>
          <TodoList />
          <Classify />    
        </div>
        )
      }
      <TodoInput />
    </div>
  )
}

export default App;
