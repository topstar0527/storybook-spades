import React, { Component } from "react";
import { Draggable, Container } from "react-smooth-dnd";
import Name from '../components/Name';

export default class Bed extends Component {
    getChildPayload = () => {
        return this.props.occupiedBy.guest;
    };

    render() {
        return (
            <div className='card'>
                <Container groupName="col" onDrop={this.props.onCardDrop} getChildPayload={this.getChildPayload}>
                    {this.props.occupiedBy && <Draggable><Name {...this.props.occupiedBy.guest}/></Draggable>}
                </Container>
                {!this.props.occupiedBy && <div className="no-guest">เตียงว่าง</div>}
            </div>
        );
    }
}