import logo from './logo.svg';
import './App.css';
import { AddToDo } from './components/add-todo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoList } from './components/todo-list';
import { UpdateTodo } from './components/update-todo';

function App() {
  return (
    <Router>
      <div className = "main">
        <h2 className = "main-header">React CRUD Operations</h2>
      </div>
      <div>
        <Route exact path = '/addTodo' component = {AddToDo} />
      </div>
      <div>
        <Route exact path = '/todos' component = {TodoList} />
      </div>
      <div>
        <Route exact path = '/updateTodo' component = {UpdateTodo} />
      </div>
    </Router>
  );
}

export default App;
