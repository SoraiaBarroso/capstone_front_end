import React, { useReducer } from "react";
import Reservation from "../components/Reservation";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
    // For simplicity, we'll return the same times regardless of the date for now
    // In a real application, you might fetch available times from a server
    return initializeTimes();
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <Reservation availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;
