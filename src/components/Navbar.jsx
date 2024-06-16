import React from "react";

export default function Navbar(props) {
    return (
        <nav className="text-white bg-[#1c1c1c] flex justify-between items-center px-10 py-6 shadow-black shadow-sm">
            <h1 className="font-bold text-2xl">Event Management System</h1>
            <button className="border-2 border-white rounded-md px-6 py-2 transform hover:scale-125 duration-500 ease-in-out" onClick={props.isLoggedIn ? props.logout : props.login}>{props.isLoggedIn ? "Logout" : "Login"}</button>
        </nav>
    )
}