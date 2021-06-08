import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import cx from 'classnames';

import { applyDrag, generateItems } from '../libs/utils';

class Bed extends Component {
    state = {
        occupant: null
    };

    onCardDrop = (id, e) => {
        //
    };

    getCardPayload = (id, index) => {
        //
    };

    render() {
        const id = 0;
        return (
            <div>
                {`เตียงที่ ${1}: `}
                <Container groupName="bed"
                    onDrop={e => this.onCardDrop(id, e)}
                    getChildPayload={index => this.getCardPayload(id, index)}
                >
                    { this.state.occupant && (
                        <Draggable key={this.state.occupant.id}>
                            <div {...this.state.occupant.props}>
                                <span className="guest-name">{`${this.state.occupant.data.name.first[0]} ${this.state.occupant.data.name.last}, ${this.state.occupant.data.name.title}`}</span>
                            </div>
                        </Draggable>
                    )}
                </Container>
            </div>
        )
    }
}
export default class Room extends Component {
    static props = {
        maxOccupancy: PropTypes.number,
    };

    state = {
        occupants: []
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}