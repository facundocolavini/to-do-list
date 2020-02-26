import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    //Prueba para ver si recibe bien el evento de Todositem
   /*
    markComplete = () => {
        console.log ('Hello')
    }
    */
      render() {
        return this.props.todos.map((todo)=> (
            <TodoItem key = {todo.id} todo = {todo} markComplete =
             {this.props.markComplete} delTodo = {this.props.delTodo} />
        ));
    }
  }

  //Prototipos de la clase es un array el todos por eso se le pone array
  Todos.propTypes = {
      todos: PropTypes.array.isRequired
  }
export default Todos;

//IMPORTANTE 
//Ya cuando tenemos conectado el evento con el archivo el cual nos recorre los porps
//Ya que nuestro evento ahora es un pops se pone como pops y hacemos el mismo procedimiento 
//En el archivo Apps para saber cual de los objetos esta completado