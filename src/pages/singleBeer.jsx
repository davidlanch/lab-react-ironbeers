import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/singleBeer.css';

export default class singleBeer extends Component {
  render() {
    const listBeers = this.props.data;
    const findBeer = listBeers.find(
      (beer) => beer._id === this.props.match.params.beerId
    );
    console.log(findBeer);
    return (
      <>
        <header className="header">
          <Link to="/home">
            <i class="fas fa-home fa-3x"></i>
          </Link>
        </header>
        <div>
          <img src={findBeer.image_url} alt={findBeer.name} />
          <p>{findBeer.name}</p>
          <p>{findBeer.tagline}</p>
          <p>{findBeer.first_brewed}</p>
          <p>{findBeer.attenuation_level}</p>
          <p>{findBeer.description}</p>
          <p>{findBeer.contributed_by}</p>
        </div>
      </>
    );
  }
}
