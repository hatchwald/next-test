import Head from "next/head"
import styles from "../styles/Home.module.css"
import ReactDOM from "react-dom"
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"


export default function Login() {

    const [username, setUsername] = useState({ username: "", password: "" })
    const [validationPassw, setValidationPassw] = useState("hidden")
    const [loader, setLoader] = useState({ class: "", attribute: false, loading: "hidden" })

    const checkUser = (e) => {
        const value = e.target.value;
        username.username = value;
        setUsername(username)

    }
    const passCheck = (e) => {
        const value = e.target.value;
        username.password = value;
        setUsername(username)

    }

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: "post",

            headers: {
                'Content-Type': 'application/json'
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })

        return { code: response.status, data: response.json() }
    }

    const submit_login = (e) => {
        e.preventDefault()
        if (username.password == "" || username.username == "") {
            setValidationPassw("block")
            return
        } else {
            setValidationPassw("hidden")
            setLoader({ class: "cursor-not-allowed", attribute: true, loading: "block" })
        }



        postData("http://localhost:3000/login", { "username": username.username, "password": username.password }).then(data => {
            if (data.code != 200) {
                const code = data.code
                data.data.then(data => {
                    toast.error(`${code} ${data.message}`)
                    console.log(username)
                    setLoader({ class: "", attribute: false, loading: "hidden" })
                })
            } else {
                toast.success("success Login")
                //    
            }

        }).catch(err => {
            console.log(username)
            // alert("error get data")
            toast.error(`500 ${err}`)
            setLoader({ class: "", attribute: false, loading: "hidden" })
        })

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full max-w-xs">
                <div>
                    <ToastContainer />
                </div>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit_login}>
                    <fieldset disabled={loader.attribute}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                    </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" onChange={checkUser} type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                    </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" autoComplete="true" id="password" type="password" placeholder="******************" onChange={passCheck} />
                            <p className={`text-red-500 text-xs italic ${validationPassw}`}>Password or username cant be empty.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className={`inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loader.class}`} type="submit">
                                <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${loader.loading}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            Sign In
                        </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
                                Register
                        </a>

                        </div>
                    </fieldset>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>

    )
}