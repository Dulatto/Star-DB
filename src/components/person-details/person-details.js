import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService

  state={
    person: null
  };
  componentDidMount(){
    this.updatePerson();
  }


  updatePerson() {
    const { personId} = this.props;
    if (personId){
      return;
    }
    this.swapiService
    .getPerson(personId)
    .then((person) => {
      this.setState({person});
    })
  }


  render() {
    return (
      <div className="person-details card">
        <img className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
