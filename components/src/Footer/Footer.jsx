import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-200 h-screen pt-12 pb-6">
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center mb-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
                <h5 className="uppercase text-lg mb-2">About Us</h5>
                <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
                <h5 className="uppercase text-lg mb-2">Quick Links</h5>
                <ul className="list-none mb-0">
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    Home
                    </a>
                </li>
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    About
                    </a>
                </li>
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    Contact
                    </a>
                </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
                <h5 className="uppercase text-lg mb-2">Stay Connected</h5>
                <ul className="list-none mb-0">
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    <i className="fab fa-facebook-f mr-2" />
                    Facebook
                    </a>
                </li>
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    <i className="fab fa-twitter mr-2" />
                    Twitter
                    </a>
                </li>
                <li className="mb-2">
                    <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
                    >
                    <i className="fab fa-instagram mr-2" />
                    Instagram
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <p className="text-center text-gray-600">
            &copy; 2023 All rights reserved.
            </p>
        </div>
        </footer>
    );
}

export default Footer;