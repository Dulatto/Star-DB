import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {



    render() {

        return (
            <StarshipList
                onItemSelected={this.onItemSelected} />

        );
    }
}
