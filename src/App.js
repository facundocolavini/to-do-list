import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import uuid from 'uuid';
import axios from 'axios';

import './App.css';


//Componenete principal es como un main
class App extends React.Component {
  state = {
    todos: [
      /* Datos sin consultar a una API
      {
        id: uuid.v4(),
        title: 'Lavar la ropa ',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Cocinar para la semana',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Sacar a pasear al perro',
        completed: false
      }
      */
    ]
  }

  //Agregamos  la ruta donde va a buscar en la api res todos los todo
  //Al ponerle ?_limit=10 solo va a cargar 10 en el array
  componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')

  .then(res => this.setState({todos: res.data }))
}



//Le llegan las id desde el checkbox 
//state es un objeto
   //para chequear si me devuelve las id de cada objeto
 /*
   markComplete = (id) => {
    console.log(id)
  }
*/
//Chequea si son la misma id y cambia el estado del objeto a true o false dependiendo en que este en el state
  markComplete = (id) => {
      this.setState ({todos: this.state.todos.map(todo =>{
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
  }

  //Elimina Todo
   
   delTodo = (id) => {
     /*Sin el server donde esta la  base de datos
      this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id 
        !== id)]});
    */
   //Eliminar con una Api
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        //Esto es una promesa
        .then(res =>  this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id 
          !== id)]}));
  }

  //Add todo  agregar al listado 
  //Voy a usar un generador random de id   i uuiid
  addTodo = (title) => {
    
    /*Asi se agrega  harcodeado 
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
      
    }
    */
    //Aca agregamos la api para hacerle un post 
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
      .then(res =>this.setState({ todos:[...this.state.todos,res.data]

      }));
      /*Sin api
     this.setState({todos: [...this.state.todos, newTodo] });
     */
  }


      render() {
        return (
        <Router>
          <div className="App">
              <div className ="container">
                <Header /> 
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo = {this.addTodo}/>
                    <Todos todos= {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
                  </React.Fragment>
                )} />
                <Route path= "/about" component={About} />
              </div>     
          </div>
        </Router>
      );  
    }
  }

export default App;
