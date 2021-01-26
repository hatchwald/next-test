import Head from "next/head"
import styles from "../styles/Home.module.css"
export default function register() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register Page </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full max-w-xs">


                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit="">
                    <fieldset >

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                    </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" onChange="" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                    </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" autoComplete="true" id="password" type="password" placeholder="******************" onChange="" />
                            <p className={`text-red-500 text-xs italic `}>Password or username cant be empty.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className={`inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `} type="submit">
                                <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}