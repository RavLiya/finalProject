import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoContextProvider from './context/ToDoContext';
import TodoTable from './components/TodoTable';

class App extends Component {
  render() {
    return (
      <ToDoContextProvider>
        <TodoTable/>
      </ToDoContextProvider>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
