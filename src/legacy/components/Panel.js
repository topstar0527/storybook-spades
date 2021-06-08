import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default ({title, description, type, cleanFn}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button onClick={cleanFn}>Complete</Button>
        </div>
    );
}
