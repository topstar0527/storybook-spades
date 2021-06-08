import React, { Component } from "react";
import { Table, Nav, NavItem } from "react-bootstrap";

// import { booking } from '../mock_booking.json';
import Name from '../components/Name';
import Calendar from '../components/Calendar';
import PrintThis from '../components/PrintThis';

const booking = [
    {
        id: 1,
        name: {
            title: 'Mr',
            first: 'Kamol',
            last: 'Treewatchararat'
        },
        checkin: 1524070800000,
        checkout: 1524270800000,
        source: 'agoda',
        type: 'Bed',
        number: 2,
        cost: 600
    }
];

export default class Booking extends Component {
    render() {
        const bookings = booking;
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>check-in</th>
                            <th>check-out</th>
                            <th>source</th>
                            <th>type</th>
                            <th>number</th>
                            <th>cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookings.map((b, i) => {
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td><Name {...b.name}/></td>
                                    <td><Calendar date={b.checkin}/></td>
                                    <td><Calendar date={b.checkout}/></td>
                                    <td>{b.source}</td>
                                    <td>{b.type}</td>
                                    <td>{b.number}</td>
                                    <td>{b.cost}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
