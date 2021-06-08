import React, { Component } from "react";
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../libs/utils';
import './dnd.css';

export class SingleContainer extends Component {
    state = {
        items1: generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` })),
        items2: generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` })),
        items3: generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` })),
        items4: generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` })),
    };
    render() {
        return (
            <Container orientation="horizontal" groupName="1" getChildPayload={i => this.state.items1[i]}
                onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
                {
                    this.state.items1.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <button className="draggable-item">
                                    {p.id}
                                </button>
                            </Draggable>
                        );
                    })
                }
            </Container>
        )
    }
}

export class CrossContainer extends Component {
    state = {
        items1: generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` })),
        items2: generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` })),
        items3: generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` })),
        items4: generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` })),
    };
    render() {
        return (
            <div>
            <Container orientation="horizontal" groupName="1" getChildPayload={i => this.state.items1[i]}
                onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
                {
                    this.state.items1.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <button className="draggable-item">
                                    {p.id}
                                </button>
                            </Draggable>
                        );
                    })
                }
            </Container>
            <Container orientation="horizontal" groupName="1" getChildPayload={i => this.state.items2[i]}
            onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}>
                {
                    this.state.items2.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <button className="draggable-item">
                                    {p.id}
                                </button>
                            </Draggable>
                        );
                    })
                }
            </Container>
            </div>
        )
    }
}

export class StyledContainer extends Component {
    state = {
        items1: generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` }))
    };
    render() {
        return (
            <div className="styled-container">
            <Container groupName="1" getChildPayload={i => this.state.items1[i]}
                onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
                {
                    this.state.items1.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <button className="draggable-item">
                                    {p.id}
                                </button>
                            </Draggable>
                        );
                    })
                }
            </Container>
            </div>
        )
    }
}