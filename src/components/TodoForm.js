import React, { Component } from 'react'
import '../index.css'

class TodoForm extends Component {
    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        console.log(this.state.text);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: this.state.text,
            completed: false
        });
        this.setState({ text: '' });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
             
                <input onChange={this.handleChange}
                    name="text"
                    value={this.state.text}
                    className="form-control input"
                    type="text"
                    placeholder="Add toDo here .."
                />

                <button className="btn btn-primary add-btn" onClick={this.handleSubmit}>+</button>
            </form>
        );
    }
}

export default TodoForm
