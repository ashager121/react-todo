import React from 'react'
import styled from 'styled-components';

const List = styled.li`
    padding: '15px',
    backgroundColor: 'lightgray',
    marginTop: '15px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'double',
    fontSize: '1.125rem'
`

// let listStyle = {
//     padding: '15px',
//     backgroundColor: 'lightgray',
//     marginTop: '15px',
//     textAlign: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     borderBottom: 'double',
//     fontSize: '1.125rem'
// }

export default class Todo extends React.Component {
    render() {
        return (
            //style=listStyle//
            <List>
                <input type="checkbox"
                    defaultChecked={this.props.todo.completed}
                />
                {this.props.todo.description}
            </List >
        )
    }
}