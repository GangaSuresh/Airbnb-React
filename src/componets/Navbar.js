import React from 'react';
import logo from '../logo.svg';




export default function Navbar(){
    return (
        <nav >
            <img src="data:image/png;base64,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" className="nav--icon" />
            <h3 className="nav--logo_text">airbnb</h3>
        </nav>
    )
}