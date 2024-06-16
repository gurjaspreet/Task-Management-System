import React, {useState} from "react";


export default function LogIn(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(() => ({
            ...formData,
            [name]: value
        }))
    }

    const submit = (event) => {
        event.preventDefault()
        console.log(formData)

        // temporary Validation
        if (formData.username === "admin" && formData.password === "password") {
            props.setIsLoggedIn(true)
        }

        setFormData(() => ({
            username: "",
            password: ""
        }))
    }

    return (
        <div className="flex flex-col justify-center items-center h-[85vh]">
            <form className="flex flex-col justify-center w-80 px-10 py-8 border-2 border-black rounded-xl bg-[#1c1c1c] shadow-black shadow-md">
                <label className="m-1 text-white" htmlFor="login-username">Username:</label>
                <input
                    className="border-2 border-gray-600 rounded-md px-4 py-2"
                    id="login-username"
                    type="text"
                    placeholder="username"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}
                />

                <label className="m-1 text-white" htmlFor="login-password">Password:</label>
                <input
                    className="border-2 border-gray-600 rounded-md px-4 py-2"
                    id="login-password"
                    type="password"
                    placeholder="********"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                />

                <button className="mx-auto my-6 bg-[#10B981] hover:bg-green-900 rounded-sm w-fit text-white px-6 py-2 transform hover:scale-110 duration-500 ease-in-out" onClick={submit}>Login</button>

                <p className="text-center text-white">Have an account? <a className="text-green-500" href="#" onClick={props.toggleHasAccount}>Login instead</a></p>
            </form>
        </div>
    )
}
