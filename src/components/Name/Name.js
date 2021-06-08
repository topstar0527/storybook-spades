import React from "react";

import './Name.css';

export default ({ title, first, last }) => {
    return <span className="name-component">{`${title} ${last}, ${first}`}</span>;
};
