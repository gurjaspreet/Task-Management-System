import React, { useState } from "react";
import CreateEventForm from "./CreateEventForm";
import Event from "./Event";

export default function Home() {
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function loadCreateEventForm() {
        setIsModalOpen(true);
    }

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    }

    return (
        <div className="text-white">
            {
                events.length === 0 ?
                    <div className="h-[80vh] flex flex-col justify-center items-center">

                        <p>No events found!</p>
                        <button
                            onClick={loadCreateEventForm} 
                            className="mx-auto my-6 bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 transform hover:scale-110 duration-500 ease-in-out">
                            Create Event
                        </button>
                    </div>
                    :
                    <div className="mx-80 my-20 flex flex-col justify-center items-center">
                        <div className="w-[600px] flex justify-around items-center">
                            <h1>Events: </h1>
                            <button onClick={loadCreateEventForm} className="bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 transform hover:scale-110 duration-500 ease-in-out">Create Event</button>
                        </div>
                        <div className="my-5 h-[50vh] w-[600px] overflow-y-auto">
                            {events.map(eventDetails => <Event
                                key={eventDetails.id}
                                id={eventDetails.id}
                                name={eventDetails.name}
                                venue={eventDetails.venue}
                                date={eventDetails.date}
                                time={eventDetails.time}
                                deleteEvent={deleteEvent}
                            />)}
                        </div>
                    </div>
            }

            {/* remove events if not used */}
            {
                isModalOpen && <CreateEventForm events={events} setEvents={setEvents} setIsModalOpen={setIsModalOpen} blurFunction={() => {
                    setIsModalOpen(false);
                }}/>
            }
        </div>
    );
}
