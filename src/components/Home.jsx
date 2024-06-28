import React, { useState } from "react";
import CreateEventForm from "./CreateEventForm";
import Event from "./Event";

export default function Home() {
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);

    function loadCreateEventForm() {
        setIsModalOpen(true);
        setIsEditing(false);
        setCurrentEvent(null);
    }

    function loadEditEventForm(event) {
        setIsModalOpen(true);
        setIsEditing(true);
        setCurrentEvent(event);
    }

    const sortEventsByName = () => {
        setEvents(prevEvents => [...prevEvents].sort((a, b) => a.name.localeCompare(b.name)));
    }

    const sortEventsByVenue = () => {
        setEvents(prevEvents => [...prevEvents].sort((a, b) => a.venue.localeCompare(b.venue)));
    }

    const sortEventsByDateTime = () => {
        setEvents(prevEvents => 
            [...prevEvents].sort((a, b) => {
                const dateTimeA = new Date(`${a.date}T${a.time}`);
                const dateTimeB = new Date(`${b.date}T${b.time}`);
                return dateTimeA - dateTimeB;
            })
        );
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
                        <div className="w-[800px] mb-6 flex justify-around items-center">
                            <h1 className="text-3xl">Events: </h1>
                            <div>
                                <button onClick={loadCreateEventForm} className="bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 mx-2 transform hover:scale-110 duration-500 ease-in-out">Create Event</button>
                                <button onClick={sortEventsByName} className="bg-blue-500 hover:bg-blue-700 rounded-sm w-fit text-white px-4 py-2 mx-2 transform hover:scale-110 duration-500 ease-in-out">Sort by Name</button>
                                <button onClick={sortEventsByVenue} className="bg-blue-500 hover:bg-blue-700 rounded-sm w-fit text-white px-4 py-2 mx-2 transform hover:scale-110 duration-500 ease-in-out">Sort by Venue</button>
                                <button onClick={sortEventsByDateTime} className="bg-blue-500 hover:bg-blue-700 rounded-sm w-fit text-white px-4 py-2 mx-2 transform hover:scale-110 duration-500 ease-in-out">Sort by Date & Time</button>
                            </div>
                        </div>
                        <div className="my-5 h-[50vh] w-[800px] overflow-y-auto">
                            {events.map(eventDetails => <Event
                                key={eventDetails.id}
                                id={eventDetails.id}
                                name={eventDetails.name}
                                venue={eventDetails.venue}
                                date={eventDetails.date}
                                time={eventDetails.time}
                                deleteEvent={deleteEvent}
                                editEvent={loadEditEventForm}
                            />)}
                        </div>
                    </div>
            }

            {/* remove events if not used */}
            {
                isModalOpen && <CreateEventForm
                    events={events}
                    setEvents={setEvents}
                    setIsModalOpen={setIsModalOpen}
                    blurFunction={() => {
                        setIsModalOpen(false);
                    }}
                    isEditing={isEditing}
                    currentEvent={currentEvent}
                />
            }
        </div>
    );
}
