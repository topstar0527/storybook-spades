import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import cx from "classnames";
import { Image } from "react-bootstrap";
import { guests } from "../guests.json";
import { applyDrag, generateItems } from '../libs/utils';
import './DnD.css';

class Guest extends Component {
    render() {
        return (
            <Draggable>
                <div className="guest-container">
                    <Image circle src={this.props.picture.medium}/>
                </div>
            </Draggable>
        )
    }
}

class BedOverlay extends Component {
    render() {
        let beds = [];
        for (let index = 0; index < this.props.count; index++) {
            beds.push(
                <div className="bed-overlay">
                    {`bed ${index+1}`}
                </div>
            );
        }
        return (
            <div className="bed-overlay-container">
                {beds}
            </div>
        )
    }
}

class Room extends Component {
    state = {
        collection: this.props.data
    };
    render() {
        return (
            <div className={cx("d-n-d-container", { error: this.state.collection.length > this.props.bedCount })}>
                <p>Room {this.props.title}</p>
                <BedOverlay count={this.props.bedCount} />
                <Container orientation="horizontal" groupName="1" getChildPayload={i => this.state.collection[i]}
                    onDrop={e => this.setState({ collection: applyDrag(this.state.collection, e) })}>
                    {
                        this.state.collection.map(p => {
                            return (
                                <Guest {...p} />
                            );
                        })
                    }
                </Container>
            </div>
        )
    }
}
export default class DnD extends Component {
    render() {
        return (
            <div className="container">
                <Room bedCount={10} title="1-2" data={guests.slice(0, 10)}/>
                <Room bedCount={10} title="1-3" data={guests.slice(10, 20)}/>
            </div>
        )
    }
}
