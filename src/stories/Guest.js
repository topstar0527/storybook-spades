import React, { Component } from "react";

import GuestDefault from '../components/Guest';

class GuestMock extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => this.setState({data: data.results[0]}));
    }

    render() {
        return (
            <GuestDefault data={this.state.data} />
        );
    }
}

export { GuestDefault, GuestMock };
