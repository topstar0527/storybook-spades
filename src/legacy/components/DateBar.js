import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ date, onPrev, onNext }) => {
    return (
        <div>
            <Button onClick={onPrev}>Prev</Button>
            <span>{`${date} April 2018`}</span>
            <Button onClick={onNext}>Next</Button>
        </div>
    );
};
