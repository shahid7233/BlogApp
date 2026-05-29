import React from "react";
import { Link } from 'react-router-dom';

function Footer (){
    return(
       <section className="relative overflow-hidden py-12 bg-gray-900 border-t border-gray-700">
            
            <div className="relative z-10 mx-auto max-w-7xl px-4">

                <div className="-m-6 flex flex-wrap">

                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    BlogApp
                                </h2>

                                <p className="text-sm leading-6 text-gray-400">
                                    Build and share your thoughts with a clean and modern blogging platform.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-sm text-gray-500">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-400">
                                Company
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-400">
                                Support
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">

                            <h3 className="tracking-wider mb-6 text-xs font-semibold uppercase text-gray-400">
                                Legals
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/privacypolicy"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-200 hover:text-blue-400 transition duration-300"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

            </div>

        </section>
  )
    
}

export default Footer