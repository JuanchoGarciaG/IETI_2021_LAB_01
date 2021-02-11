import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {
	
	constructor(props) {
        super(props);		
    }  
	

		
	render() {		
		const todos = this.props.todos;
		const listItems = todos.map((todo) =>
		  <li key={todo.priority}><Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/></li>
		);
        return ( 		
			<div className="listaTodoList">			
			<ul>{listItems}</ul>
			</div>
        );
    }


}


