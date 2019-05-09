import React from 'react'
let listStyle = {
    padding: '15px',
    backgroundColor: 'lightgray',
    marginTop: '15px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'double',
    fontSize: '1.125rem'
}

export default class Todo extends React.Component {
    render() {
        return (
            <li style={listStyle}>
                <input type="checkbox"
                    defaultChecked={this.props.todo.completed}
                />
                {this.props.todo.description}
            </li >
        )
    }
}