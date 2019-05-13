import React from 'react'
import styled from 'styled-components'

const List = styled.li`
    padding: 15px;
    background-color: lightgray;
    margin-top: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: double;
    font-size: 1.125rem;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

export default class Todo extends React.Component {
    render() {
        return (
            <List completed={this.props.todo.completed}>
                <input type="checkbox"
                    defaultChecked={this.props.todo.completed}
                />
                {this.props.todo.description}
            </List >
        )
    }
}