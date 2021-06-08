import React from "react";
import { Button } from "react-bootstrap";
import './PrintThis.css';

const onClick = () => {
    window.print();
};

export default props => {
    return (<Button className="no-print" onClick={onClick}>พิมพ์หน้านี้</Button>)
}