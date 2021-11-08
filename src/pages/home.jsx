import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class home extends Component {
   
    render() {
        return (
            <>
            <div class="presentation-home">
                <img src="./../../assets/beers.png" alt="" />
                <Link to='/beers'>Beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora, excepturi officia quidem laborum asperiores assumenda incidunt dignissimos commodi perferendis debitis corrupti ut a vitae blanditiis provident eos sit ex.</p>
            </div>
            <div class="presentation-home">
                <img src="./../../assets/new-beer.png" alt="" />
                <Link to='/newBeer'>New Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora, excepturi officia quidem laborum asperiores assumenda incidunt dignissimos commodi perferendis debitis corrupti ut a vitae blanditiis provident eos sit ex.</p>
            </div>
            <div class="presentation-home">
                <img src="./../../assets/random-beer.png" alt="" />
                <Link to='/randomBeer'>Random Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora, excepturi officia quidem laborum asperiores assumenda incidunt dignissimos commodi perferendis debitis corrupti ut a vitae blanditiis provident eos sit ex.</p>
            </div>

            </>
        )
    }
}
