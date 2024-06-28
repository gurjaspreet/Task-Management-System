import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import closeBtn from "../assets/close-icon.png";

export default function CreateEventForm(props) {
    
    const [formData, setFormData] = useState({
        name: "",
        venue: "",
        date: "",
        time: ""
    });

    useEffect(() => {
        if (props.isEditing && props.currentEvent) {
            setFormData({
                name: props.currentEvent.name,
                venue: props.currentEvent.venue,
                date: props.currentEvent.date,
                time: props.currentEvent.time
            });
        }
    }, [props.isEditing, props.currentEvent]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submit = (event) => {
        event.preventDefault();

        if (formData.name === "") {
            alert("Please enter event name");
            return;
        } else if (formData.venue === "") {
            alert("Please enter event venue");
            return;
        } else if (formData.date === "") {
            alert("Please enter date of the event");
            return;
        } else if (formData.time === "") {
            alert("Please enter time of the event");
            return;
        }

        if (props.isEditing) {
            props.setEvents((prevEvents) =>
                prevEvents.map((event) =>
                    event.id === props.currentEvent.id
                        ? { ...formData, id: props.currentEvent.id }
                        : event
                )
            );
        } else {
            const newEvent = { ...formData, id: uuidv4() };
            props.setEvents((prevEvents) => [newEvent, ...prevEvents]);
        }

        setFormData({
            name: "",
            venue: "",
            date: "",
            time: ""
        });
        props.setIsModalOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm z-50">
            <img src={closeBtn} alt="close" className="absolute top-[90px] right-[90px] w-8 transform hover:scale-125 duration-500 ease-in-out" onClick={() => props.setIsModalOpen(false)} />
            <div className="flex flex-col justify-center items-center h-[85vh] top-12 left-[30.5%]">
                <h2 className="text-white text-4xl">{props.isEditing ? "Edit Event" : "Create Event"}</h2>
                <form className="flex flex-col justify-center w-[420px] px-10 py-8 border-2 border-black rounded-xl bg-[#1c1c1c] shadow-black shadow-md mt-5">
                    <label htmlFor="create-event--name" className="m-1 text-white">Name:</label>
                    <input
                        className="text-black border-2 border-gray-600 rounded-md px-4 py-2"
                        id="create-event--name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Event Name"
                    />
                    <label htmlFor="create-event--venue" className="m-1 text-white mt-3">Venue:</label>
                    <input
                        className="text-black border-2 border-gray-600 rounded-md px-4 py-2"
                        id="create-event--venue"
                        type="text"
                        name="venue"
                        onChange={handleChange}
                        value={formData.venue}
                        placeholder="Event Venue"
                    />
                    <div className="flex mt-3 justify-between">
                        <div className="flex flex-col mr-4">
                            <label htmlFor="create-event--date" className="m-1 text-white">Date:</label>
                            <input
                                className="text-black border-2 border-gray-600 rounded-md px-4 py-2 w-[160px]"
                                id="create-event--date"
                                type="date"
                                name="date"
                                onChange={handleChange}
                                value={formData.date}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="create-event--time" className="m-1 text-white">Time:</label>
                            <input
                                className="text-black border-2 border-gray-600 rounded-md px-4 py-2 w-[160px]"
                                id="create-event--time"
                                type="time"
                                name="time"
                                onChange={handleChange}
                                value={formData.time}
                            />
                        </div>
                    </div>

                    <button className="mx-auto mt-8 mb-2 bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 transform hover:scale-110 duration-500 ease-in-out" onClick={submit}>
                        {props.isEditing ? "Update" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}
