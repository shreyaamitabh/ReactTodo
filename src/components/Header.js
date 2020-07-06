import React, { Component } from 'react';

class Header extends Component {
    render() {
        const myStyle={
            fontSize:"90px", 
            fontFamily:"fantasy", 
            textAlign:"center", 
            color: "rgb(80, 92, 104)"
        }
        return (
            <div>
                <p style={myStyle}>todos</p>
            </div>
        );
    }
}

export default Header;