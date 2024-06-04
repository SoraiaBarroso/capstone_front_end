import React, { useState, useEffect } from "react";
import bk_lemon from '../assets/bk-lemon.png'

function Reservation() {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setDisabled(!(date && time && guests && occasion && name));
    }, [date, time, guests, occasion]);


    function hanldeForm(event) {
        event.preventDefault()
        console.log({ date, time, guests, occasion });
    }

    return (
        <div className="h-[40em] flex flex-col justify-center items-center relative">
            <img src={bk_lemon} alt="background lemon" className="absolute -start-20 -bottom-40 -z-10 2xl:w-[20em] sm:w-[14em]"></img>
            <img src={bk_lemon} alt="background lemon" className="absolute -z-10 -end-20 bottom-24 2xl:w-[20em] sm:w-[14em]"></img>

            <h1 className="text-4xl mb-12 mt-28 text-primary-green font-bold">Reserve a table</h1>

            <form className="flex flex-col w-80" onSubmit={hanldeForm}>
                <label htmlFor="res-date" className="text-lg text-gray-700">Date:</label>
                <input
                    required
                    type="date"
                    id="res-date"
                    value={date}
                    className="h-10 rounded mt-2 border-gray-300 border p-2"
                    onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="res-time" className="text-lg mt-6 text-gray-700">Time:</label>
                <select
                    id="res-time"
                    value={time}
                    className="h-10 rounded bg-white mt-2 border-gray-300 border p-2"
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="" disabled>Select a Time</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <label htmlFor="guests" className="text-lg mt-6 text-gray-700">Number of guests:</label>
                <input
                    required
                    className="h-10 rounded mt-2 border-gray-300 border p-2"
                    type="number"
                    id="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion" className="text-lg mt-6 text-gray-700">Occasion:</label>
                <select
                    id="occasion"
                    className="h-10 rounded mt-2 border-gray-300 border p-2 bg-white"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="" disabled>Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Casual">Casual</option>
                </select>
                <label htmlFor="name" className="text-lg text-gray-700 mt-6">Your name:</label>
                <input
                    required
                    type="text"
                    id="name"
                    value={name}
                    className="h-10 rounded mt-2 border-gray-300 border p-2"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                     className="mt-10 disabled:opacity-50 disabled:cursor-not-allowed text-lg cursor-pointer p-2 rounded-xl bg-primary-yellow" 
                     type="submit"
                     value="Make Your reservation"
                     disabled={disabled}
                     required
                />
            </form>
        </div>
    );
}

export default Reservation