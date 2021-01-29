import Head from "next/head"
import styles from "../styles/Home.module.css"
import React, { useState } from "react"
export default function register() {
    const dates = new Date()
    const [alldata, setData] = useState({ username: "", password: "", secpassword: "" })
    const submitRegister = e => {
        e.preventDefault()

        const element = document.getElementById("alert-err-match")

        if (3 > alldata.username.length) {
            element.classList.remove("hidden")
            element.innerHTML = "Minimum username is 3 Character"
            return
        }

        if (alldata.password !== alldata.secpassword) {
            element.classList.remove("hidden")
            return;
        } else {
            element.classList.add("hidden")
        }

        const button_reg = document.getElementById("btn-submit-register")
        const svg_loader_element = document.getElementById("loader-svg")
        const form_fieldset = document.getElementById("fieldset_form")
        button_reg.classList.add("cursor-not-allowed")
        svg_loader_element.classList.remove("hidden")
        form_fieldset.setAttribute("disabled", true)

    }

    const changeUser = e => {
        const value = e.target.value
        alldata.username = value
        setData(alldata)
    }

    const changePass = e => {
        const value = e.target.value
        alldata.password = value
        setData(alldata)
    }

    const change2Pass = e => {
        const value = e.target.value
        alldata.secpassword = value
        setData(alldata)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Register Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full max-w-xs">
                <h3 className="mb-6 text-center block text-black font-bold text-2xl">Register Account</h3>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitRegister}>
                    <fieldset id="fieldset_form">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" onChange={changeUser} type="text" placeholder="Username" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="false" id="password" type="password" placeholder="******************" onChange={changePass} required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="second_passw">Re-enter Password</label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="second_passw" autoComplete="false" type="password" onChange={change2Pass} placeholder="******************" required />
                            <p className="text-red-500 text-xs italic hidden" id="alert-err-match">Password not match !</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className={`inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `} id="btn-submit-register" type="submit">
                                <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white hidden`} id="loader-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Register
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                                Login
                            </a>

                        </div>
                    </fieldset>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;{dates.getFullYear()} Hatchwald Inc. All rights reserved.
                </p>
            </div>
        </div>
    )
}