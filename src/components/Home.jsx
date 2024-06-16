import React, { useState } from "react";

export default function Home() {
    const [events, setEvents] = useState([]);

    const createEvent = (event) => {
        event.preventDefault();
    }

    return (
        <div className="text-white">
            {events.length === 0 ? 
                <div className="h-[80vh] flex flex-col justify-center items-center">
                    <p>No events found!</p>
                    <button className="mx-auto my-6 bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 transform hover:scale-110 duration-500 ease-in-out">Create Event</button>
                </div>
                : 
                "Event Details"}
        </div>
    );
}
