import React, { Component } from "react";
import cx from 'classnames';
import { Button } from 'react-bootstrap';
import { STATUS } from '../constants';
import './Bed.css';

const { AVAILABLE, BOOKED } = STATUS;

function cxStatus(status) {
    switch (status) {
        case AVAILABLE:
            return 'btn-default';
        case BOOKED:
            return 'btn-primary';
        default:
            return 'btn-danger';
    }
}

export default class Bed extends Component {
    state = {
        status: AVAILABLE
    };

    bindEvent = status => {
        switch(status) {
            case AVAILABLE:
                return this.book;
            case BOOKED:
                return this.checkout;
            default:
                return this.ready;
        }
    };

    book = () => {
        this.setState({ status: BOOKED });
    };

    checkout = () => {
        this.setState({ status: 'CLEANING' });
    };

    ready = () => {
        this.setState({ status: AVAILABLE });
    };

    render() {
        const { title, type, status } = this.props;

        return (
            <Button
                className={cx('bed', cxStatus(status), type)}
            >
                <span>{title}</span>
            </Button>
        );
    }
}
