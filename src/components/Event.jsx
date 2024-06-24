import React from "react";
import deleteBtn from "../assets/delete.png";

export default function Event(props) {
    return(
        <div className="flex justify-center items-center mt-4">
            <div className="flex justify-evenly p-4 w-[800px] rounded-lg shadow-black shadow-md bg-[#2D2A2A]">
                <div className="w-36 bg-[#00ffe0] p-2 mx-2 rounded-sm text-center flex justify-center items-center text-black">
                    <p>{props.name}</p>
                </div>
                <div className="w-36 bg-[#00ffe0] p-2 mx-2 rounded-sm text-center flex justify-center items-center text-black">
                    <p>{props.venue}</p
                ></div>
                <div className="w-36 bg-[#00ffe0] p-2 mx-2 rounded-sm text-center flex justify-center items-center text-black">
                    <p>{props.date}</p>
                </div>
                <div className="w-36 bg-[#00ffe0] p-2 mx-2 rounded-sm text-center flex justify-center items-center text-black">
                    <p>{props.time}</p>
                </div>
                <div className="flex justify-center items-center w-15 p-1 mx-1 rounded-sm text-black">
                    <img src={deleteBtn} alt="delete" className="w-10 hover:scale-125 duration-500" onClick={() => props.deleteEvent(props.id)}
                    />
                </div>
            </div>
        </div>
    );
}