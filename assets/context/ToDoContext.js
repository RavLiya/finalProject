import context from '@symfony/webpack-encore/lib/context'
import React, { Component, createContext } from 'react'

export const ToDoContext = createContext();

export default class ToDoContextProvider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [{id: 1, task: 'doSomething'},
                    {id: 2, task: 'doSomething'}],
        }
    }

    createTodo(e,todo){
        e.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos:data,
        });
    }

    updateTodo(data){
        let todos = [...this.state.todos]
        let todo = todos.find(todo => {
           return todo.id === data.id;
        });

        todo.task = data.task;

        this.setState({todos: todos,});
    }


  render() {
    return (
        <ToDoContext.Provider value={{
            ...this.state,
            createTodo:this.createTodo.bind(this),
            updateTodo:this.updateTodo.bind(this),
            readTodo:this.readTodo.bind(this),
            deleteTodo:this.deleteTodo.bind(this),
        }}>
            {this.props.children}
        </ToDoContext.Provider>
    )
  }
}
