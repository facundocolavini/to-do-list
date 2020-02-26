import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    //Metodo en esta funcion 
    //Es un cambio de style dinamico que se fija si  el state esta completed
   
    getStyle = () => {
        if (this.props.todo.completed){
            return {
                background: '#f4f4f4',
                padding: '10px 10px',
                borderBottom: '1px #ccc dotted', 
                width: '100%',
                textDecoration: 'line-through'
                
            }
        } else {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted', 
                width: '100%',
                textDecoration: 'none'
               
    
            
                
            }
        }
    }
    

    //Otra forma mas practicar de cambiar el style dinamicamente
   /*
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-trough' : 'none' //es como un if entonces cambiara por  line-trough o none . el : ,true : false  separa el true del false,es como un else
        }

    }
    */
    //no puede leer props indefinidos por que no forma parte en este component de la clase 
    //para solucionarlo utilizamos el bind(este accesorio)
    //El evento se puede hacer asi 
    /*markComplete(i){
        console.log(this.props)
    }
    */
    
    //Y tambien asi con un arrow function
    
    markComplete = (e) => {
        console.log(this.props)
    }
    
    render() {
        //podemos declarar una constante para no tener que poner  ej this.props.todo.id y pones solo id
        const {id, title} = this.props.todo; //va a tener el id y el titulo 
        return (
            <div style = { this.getStyle()}>
                <p >
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}
                     /> {' '}
                    { title } 
                    <button  onClick= {this.props.delTodo.bind(this, id)} style= {btnStyle}> x </button>
                </p>
            </div>
        )
    }
}


//IMPORTANTE 
//Cuando tenemos un evento como el checkbox necesitamos pasarle  como props el evento  en la parte del render de la misma clase donde se hace el checkbox.
//Luego nuestro archivo donde hacemos el recorrido del cada elemento del state  lista cada props alado  agregamos un metodo que recibira
//el evento del archivo donde creamos el checkbox con su valor (Todoitem) entonces le damos una salida para saber si se conecto con  Todoitem con Todos.

//agregamos un elemento evento para el checkbox a la hora de hacer click
//Y markComplete es un metodo 

//Prototipo pero va a hacer solo un objeto en esta clase por que es todo
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
//hago el style con una variable es un ejemplo para esto voy a usar el getStyle()

export default TodoItem;
