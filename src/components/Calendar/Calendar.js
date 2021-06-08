import React from "react";
import moment from 'moment';

export default ({ date }) => {
    return (
        <span>
        {
            moment(date).calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'DD/MM/YYYY',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'DD/MM/YYYY'
            })
        }
        </span>
    )
};