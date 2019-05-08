import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <input type="checkbox"
                    defaultChecked={this.props.todo.completed}
                />
                {this.props.todo.description}
            </li >
        )
    }
}