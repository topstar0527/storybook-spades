import React, { Component } from "react";
import { PanelGroup, Panel, Table } from "react-bootstrap";
import { keys } from 'lodash';
import { ROUTES } from '../constants';

import Timeline from './Timeline';

const { BOOKING } = ROUTES;

const data = [
    {
        "id": "0",
        "requestedUnit": "PRIVATE",
        "name": "Kamol Treewatchararat",
        "checkin": "4/10/2018",
        "checkout": "4/14/2018",
        "guests": 2,
        "remark": ""
    },
    {
        "id": "1",
        "requestedUnit": "BUNK",
        "name": "Jessica Jones",
        "checkin": "4/10/2018",
        "checkout": "4/12/2018",
        "guests": 2,
        "remark": ""
    },
];

class BookingListItem extends Component {
    state = {
        expanded: false
    };

    render() {
        const {id, name} = this.props.data;
        return (
            <Panel className="panel-primary" id={id} expanded={this.state.expanded} eventKey={id} onClick={() => {this.setState({expanded:!this.state.expanded})}}>
                <Panel.Heading>
                    <Panel.Title>{name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible className="table">
                    <Table>
                        <tbody>{keys(this.props.data).map(prop => <tr><th scope="row">{prop}</th><td>{this.props.data[prop]}</td></tr>)}</tbody>
                    </Table>
                </Panel.Body>
                
            </Panel>
        )
    }
}
export default class BookingList extends Component {
    state = {
        activeKey: null
    };

    render() {
        return (
            <div>
                <PanelGroup id="0">
                    { data.map(booking => <BookingListItem data={booking} key={booking.id} />) }
                    <Timeline {...data[0]} />
                </PanelGroup>
            </div>
        )
    }
}