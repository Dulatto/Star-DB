import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';


import ItemDetails, {Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true    
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

    render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

      const {getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople,
        getAllPlanets} = this.swapiService;

      const personDetails = (
        <ItemDetails 
           itemId={11}
           getData={getPerson}
           getImageUrl={getPersonImage}>

              <Record field="gender" label="Gender" />
             <Record field="eyeColor" label="Eye Color"  />

             </ItemDetails>
      );

      const starshipDetails = (
        <ItemDetails 
           itemId={5}
           getData={getStarship}
           getImageUrl={getStarshipImage} >
             
             <Record field="model" label="Model" />
             <Record field="length" label="Length" />
             <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      );


    return (
      <ErrorBoundry>
      <div className="stardb-app">
        <Header />
       <Row
       left={personDetails}
       right={starshipDetails}/>
      </div>
      </ErrorBoundry>
    );
  }
};

    /* { planet}
        <div className="row ml-2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg mr-2"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button> 
         <ErrorButton />
        </div>*/

          /* <div className="row mb-2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */

        /* <div className="row mb-2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */