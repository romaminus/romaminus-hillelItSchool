import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function Vehicles() {
  const urlAllPath = useSelector(state=>state.path.path);
  const [urlVehicles, setUrlVehicles] = useState(urlAllPath.vehicles);
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10 px-4 sm:px-6 lg:px-8 pt-30 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-yellow-400 text-center mb-12">
          /vehicles
        </h1>

        <nav
          className="flex items-center space-x-2 text-sm mb-10"
          aria-label="Breadcrumb"
        >
          <NavLink
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg
              className="h-5 w-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="sr-only">Home</span>
          </NavLink>
          <span className="text-gray-400">/</span>
          <span className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full font-medium">
            Vehicles
          </span>
        </nav>

        <h2 className="text-2xl font-semibold mb-4">API Endpoint:</h2>

        <div className="flex items-center mb-12">
          <div className="relative flex items-center w-full max-w-xl">
            <input
              type="text"
              value={urlVehicles}
              onChange={e=>{setUrlVehicles(e.target.value)}}
              className="w-full bg-gray-200 text-gray-900 py-4 pl-6 pr-16 rounded-l-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a href={urlVehicles} className="absolute right-0 top-0 bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-4 px-6 rounded-r-lg transition duration-300 ease-in-out">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
          <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Copy
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <div className="flex space-x-6 text-sm font-medium mb-4">
            <button className="text-yellow-500 border-b-2 border-yellow-500 pb-1">
              cURL
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              JavaScript
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Python
            </button>
            <button className="text-gray-600 hover:text-gray-900">Java</button>
            <button className="text-gray-600 hover:text-gray-900">C#</button>
            <button className="text-gray-600 hover:text-gray-900">PHP</button>
            <button className="text-gray-600 hover:text-gray-900">Ruby</button>
            <button className="text-gray-600 hover:text-gray-900">Go</button>
            <button className="text-gray-600 hover:text-gray-900">Swift</button>
            <button className="text-gray-600 hover:text-gray-900">
              Kotlin
            </button>
            <button className="text-gray-600 hover:text-gray-900">Dart</button>
            <button className="text-gray-600 hover:text-gray-900">Rust</button>
          </div>

          <div className="flex items-center justify-between bg-gray-200 rounded-lg p-4">
            <code className="text-gray-900 text-lg">
              curl "https://swapi.info/api/vehicles"
            </code>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-sm transition duration-300 ease-in-out">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
