import React from 'react'
import hamburger from "./images/hamburger.png"
import settings from "./images/settings.png"

let headerStyle = {
    backgroundColor: 'lightseagreen',
    display: 'flex',
    justifyContent: 'space-around'
}


export default function Header() {
    return (
        <div style={headerStyle} className="header">
            <img src={hamburger} id="hamburger" alt="hamburger"></img>
            <h1>
                ToDo App
              </h1>
            <img src={settings} id="settings" alt="settings"></img>
        </div>
    )
}