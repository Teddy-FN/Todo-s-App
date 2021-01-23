import { Component } from 'react';
import Form from './component/form';
import Todos from './component/todos'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, content: 'Bangun' },
        { id: 2, content: 'Sarapan' }
      ]
    }
  }
  deleteTodo = id => {
    console.log('ID Todo\'s', id)
    const deleteTodoList = this.state.todos.filter(result => {
      return result.id !== id
    });
    this.setState({
      todos: deleteTodoList
    })
  }
  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 10)
    let addTodos = [...this.state.todos, todo]
    this.setState({
      todos: addTodos
    })
  }

  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
