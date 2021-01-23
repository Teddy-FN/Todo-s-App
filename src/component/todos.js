import React from 'react';

function Todos({ todos,deleteTodo }) {
    // deleteTodos = deleteTodo
    const todoList = todos.length ? (
            todos.map(res => {
                return (
                        <div className="collection-item" key={res.id}>
                            <span>{res.content}</span>
                            <button className="btn delete btn-small" onClick={() => {deleteTodo(res.id)}}>
                            <i class="large material-icons">delete</i></button>
                            <div style={{clear: 'both'}}></div>
                        </div>
                )
            })
    ) : (
        <p className = "center">You have no todos's left anymore,yeay!</p>
    )
    return (
    <div className="todos collection">
        {todoList}                  
    </div>
    )

}

export default Todos;