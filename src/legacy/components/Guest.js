import React, { Component } from "react";
import { Image } from "react-bootstrap";
import defaultThumbnail from '../default.png';
import "./guest.css";

export default class Guest extends Component {
    render() {
        const src = this.props.data ? this.props.data.picture.large : defaultThumbnail
        return (
            <Image src={src} circle={true}/>
        );
    }
}