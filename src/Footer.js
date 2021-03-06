import React from 'react'
import addButton from "./images/add.png"
import editButton from "./images/edit.png"

let footerStyle = {
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'space-around'
}

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div className="addButtonElements">
                <img src={addButton} id="add" alt="add"></img>
                <h3>Add</h3>
            </div>
            <div className="editButtonElements">
                <img src={editButton} id="edit" alt="edit"></img>
                <h3>Edit</h3>
            </div>
        </footer>
    )
}
