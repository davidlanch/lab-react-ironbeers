import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Home from './pages/home'
import SingleBeer from './pages/singleBeer';
import Beers from './pages/beers';
import NewBeer from './pages/newBeer';
import RandomBeer from './pages/randomBeer';
import { Switch, Route, Redirect } from "react-router-dom";
import axios from 'axios'

class App extends React.Component {


  state = {
    beers : [],
}


  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((APIResponse) => {
        console.log(APIResponse.data);
        this.setState({
          beers: APIResponse.data
        })
       
      });
  }

  render() {
    console.log("this is in app",this.state)
    return (
      <div className="App">
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route  path="/home" component={Home}/>   
         <Route exact path="/beers" render={(props) => {
                return <Beers {...props} data={this.state.beers} />;
              }}/>
         <Route path="/beers/:beerId" component={SingleBeer}/>
         <Route path="/newBeer" component={NewBeer}/>
         <Route path="/randomBeer" component={RandomBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
