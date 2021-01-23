import React, { Component } from 'react';
import '../style/form.css'


class Form extends Component {
    state = {
        content: ''
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo's</label>
                    <input onChange={this.handleChange} value={this.state.content} type="text" />
                    <button class="btn submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default Form;