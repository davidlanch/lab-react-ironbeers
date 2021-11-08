import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/beers.css';

export default class beers extends Component {
  render() {
    const listBeers = this.props.data;

    return (
      <>
        <header className="header">
          <Link to="/home">
            <i class="fas fa-home fa-3x"></i>
          </Link>
        </header>
        <div>
          {listBeers.map((beer) => {
            return (<div>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                <Link to={"/beers/" + beer._id} ><p>Details</p></Link>
            </div>)
            
          })}
        </div>
      </>
    );
  }
}
