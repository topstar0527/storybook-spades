import { createContext } from "react";

import { booking } from '../booking.json';

const create = () => {

};

const update = () => {

};

const remove = () => {

};

const BookingContext = createContext({
    booking,
    create,
    update,
    remove
});

export default BookingContext;
