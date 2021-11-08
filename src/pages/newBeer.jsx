import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './../css/newBeer.css';

export default class newBeer extends Component {
    render() {
        return (
            <>
            <header className="header"><Link to='/home'><i class="fas fa-home fa-3x"></i></Link></header>

            
            </>
        )
    }
}
