import React, { useState, useEffect } from "react";
import bk_lemon from '../assets/bk-lemon.webp'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function Reservation({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const [invalid, setInvalid] = useState(false);
    const [invalidName, setInvalidName] = useState(false);

    useEffect(() => {
        setInvalidName(!/^[a-zA-Z\s]*$/.test(name));
    }, [name]);

    useEffect(() => {
        setInvalid(isNaN(guests) || guests < 1 || guests > 10);
    }, [guests]);

    useEffect(() => {
        setDisabled(!(date && time && guests && occasion && name && !invalid && !invalidName));
    }, [date, time, guests, occasion, name, invalid, invalidName]);

    function hanldeForm(event) {
        event.preventDefault()
        console.log({ date, time, guests, occasion });
        setSubmitted(true);
    }

    if (submitted) {
        return (
             <div className="overflow-hidden 2xl:h-[40em] h-[45em] sm:h-[50em] flex flex-col justify-centeritems-center relative">
                <img loading="lazy" src={bk_lemon} alt="background lemon" className="absolute w-36 -bottom-6 -start-20 sm:-bottom-28 lg:bottom-0 2xl:-bottom-40 -z-10 2xl:w-[20em] sm:w-[14em]"></img>
                <img loading="lazy" src={bk_lemon} alt="background lemon" className="absolute w-36 bottom-[28em] -z-10 -end-20 sm:bottom-72 2xl:bottom-24 2xl:w-[20em] sm:w-[14em]"></img>
                <IoCheckmarkDoneCircle size="6em" className="text-green-400"/>
                <h1 className="text-3xl mt-6 2xl:text-5xl sm:text-3xl mb-12 2xl:mt-10 sm:mt-6 text-primary-green font-bold">Thank you {name}!</h1>
                <p className="text-lg 2xl:text-2xl sm:text-lg text-text-black">Your reservation has been made</p>
                <p className="text-lg 2xl:text-2xl sm:text-lg mt-2 text-text-black">We will see you {date} at {time}</p>
                <Link to="/" className='w-32 px-3 py-1 text-sm transition duration-300 flex justify-center items-center lg:text-lg 2xl:text-lg sm:text-sm hover:bg-transparent hover:text-primary-green hover:border-primary-green hover:border-2 ease-in-out transform 2xl:w-60 md:w-44 2xl:h-12 lg:h-10 sm:h-8 font-bold md:mt-12 sm:w-1/4 bg-primary-green text-white rounded-2xl mt-8 cursor-pointer'>
                    Home
                </Link>
             </div>
        );
    }

    return (
        <div className="overflow-hidden 2xl:h-[50em] pb-28 h-[45em] sm:h-[50em] flex flex-col justify-center items-center relative">
            <img loading="lazy" src={bk_lemon} alt="background lemon" className="absolute w-36 -bottom-6 lg:bottom-0 -start-20 sm:-bottom-28 2xl:-bottom-40 -z-10 2xl:w-[20em] sm:w-[14em]"></img>
            <img loading="lazy" src={bk_lemon} alt="background lemon" className="absolute w-36 bottom-[28em] -z-10 -end-20 sm:bottom-72 2xl:bottom-24 2xl:w-[20em] sm:w-[14em]"></img>

            <h1 className="2xl:text-4xl text-2xl mt-6 sm:text-3xl mb-12 2xl:mt-28 text-primary-green font-bold">Reserve a table</h1>

            <form className="flex flex-col 2xl:w-80 w-56 lg:w-72 sm:w-56" onSubmit={hanldeForm}>
                <label htmlFor="res-date" className="text-lg text-gray-700">Date:</label>
                <input
                    required
                    type="date"
                    id="res-date"
                    value={date}
                    className="sm:h-10 h-8 pb-6 rounded mt-2 border-gray-300 border p-2"
                    onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="res-time" className="text-lg mt-6 text-gray-700">Time:</label>
                <select
                    id="res-time"
                    value={time}
                    className="sm:h-10 h-8 pb-6 rounded bg-white mt-2 border-gray-300 border p-2"
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="" disabled>Select a Time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests" className="text-lg mt-6 text-gray-700">Number of guests:</label>
                <input
                    required
                    className="sm:h-10 h-8 rounded mt-2 border-gray-300 border p-2 invalid:border-red-500 invalid:text-red-500"
                    type="number"
                    id="guests"
                    placeholder="1"
                    aria-invalid={invalid}
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                {invalid && <span className="text-red-500 mt-1">Please provide a valid number of guests (1-10).</span>}
                <label htmlFor="occasion" className="text-lg mt-6 text-gray-700">Occasion:</label>
                <select
                    id="occasion"
                    className="sm:h-10 h-8 pb-6 rounded mt-2 border-gray-300 border p-2 bg-white"
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
                    aria-invalid={invalidName}
                    value={name}
                    className={`sm:h-10 h-8 rounded mt-2 border p-2 ${invalidName ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={(e) => setName(e.target.value)}
                />
                {invalidName && <span className="text-red-500 mt-1">Please provide a valid name (letters only).</span>}
                <input
                     className="mt-10 px-3 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed sm:text-lg cursor-pointer p-2 rounded-xl bg-primary-yellow" 
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