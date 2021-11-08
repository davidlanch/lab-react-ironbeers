import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/randomBeer.css';
import axios from 'axios';

export default class randonBeer extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((APIResponse) => {
        console.log(APIResponse.data);
        this.setState({
          beers: APIResponse.data,
        });
      });
  }

  render() {
    const random = this.state.beers;

    return (
      <>
        <header className="header">
          <Link to="/home">
            <i class="fas fa-home fa-3x"></i>
          </Link>
        </header>

        <div>
          <img src={random.image_url} alt={random.name} />
          <p>{random.name}</p>
          <p>{random.tagline}</p>
          <p>{random.first_brewed}</p>
          <p>{random.attenuation_level}</p>
          <p>{random.description}</p>
          <p>{random.contributed_by}</p>
        </div>
      </>
    );
  }
}
