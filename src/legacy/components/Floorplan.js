// Modules
import React, { Component } from "react";
import cx from "classnames";
import { find, includes } from 'lodash';

// Stylesheets
import './Floorplan.css';

// Components
import Bed from './Bed';
import DateBar from './DateBar';

// Libs
import loadStatuses from './loadStatuses';
import { STATUS } from '../constants';

// DATA
import schema from './mockSchema.json';

const { AVAILABLE, BOOKED } = STATUS;

export default class Floorplan extends Component {
    state = {
        statuses: {},
        date: Math.round(Date.now() / (1000 * 60 * 60 * 24 * 365)) % 30
    };

    componentDidMount() {
        loadStatuses().then(statuses => this.setState({statuses}));
    }

    renderGroup({ children, type, id, title }) {
        const { statuses, date } = this.state;
        const currentStatuses = statuses[date] || [];

        return (
            <div key={`${type}.${id}`} className={cx(type, 'group')}>
                <p>{title || `${type}.${id}`}</p>
                {
                    children.map(child => {
                        if (child.isUnit) {
                            const isBooked = includes(currentStatuses, child.id);
                            return <Bed status={isBooked ? BOOKED : AVAILABLE} {...find(schema.units, u => u.id === child.id)} />;
                        }
                        const sub_group = find(schema.groups, g => g.id === child.id);
                        return this.renderGroup(sub_group);
                    })
                }
            </div>
        )
    }

    render() {
        const { groups } = schema;
        const floorplan = find(groups, g => g.type === 'HOTEL');
        const { date } = this.state;

        return (
            <div className={ cx('floorplan') }>
                <DateBar date={date}
                onNext={() => this.setState({ date: date + 1 })}
                onPrev={() => this.setState({ date: date - 1 })}
                />
                { this.renderGroup(floorplan, date) }
            </div>
        );
    }
}