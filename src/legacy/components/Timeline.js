import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { range } from 'lodash';

import schema from './mockSchema.json';

class UnitTimeline extends Component {
    render() {
        return (
          <tbody><tr><th>{this.props.data.title}</th></tr></tbody>
        );
    }
};

export default class Timeline extends Component {
    render() {
        const { units } = schema;
        const diff = Date.parse(this.props.checkout) - Date.parse(this.props.checkin);
        const nights = range(1, 1+diff/(1000*60*60*24));

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Unit</th>
                        {nights.map(n => <th>{n}</th>)}
                    </tr>
                </thead>
                {units.map(unit => <UnitTimeline key={unit.id} data={unit}/>)}
            </Table>
        )
    }
}