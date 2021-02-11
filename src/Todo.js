import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
		console.log();
        return ( 
				<h4> HI, I'm Juan Garcia, I want to say you: {this.props.text}, have a level {this.props.priority} Date: {this.props.dueDate.toString()}</h4> 
        );
    }

}