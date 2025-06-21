import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUrlData } from "../redux/redusers/dataReducer";

function HomePage() {
  const urlAllPath = useSelector((state) => state.path.path);
  const [urlApi, setUrlApi] = useState(urlAllPath.api);

  const { data, status, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrlData(urlApi));
  }, [dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUrlData(urlApi));
  };
  return (
    <>
      <section className="bg-[#F5F5F5] text-grey-900 py-16 px-4 sm:px-6 lg:px-8 pt-25">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#FFE81F] mb-2">
            SWAPI Reborn!
          </h1>
          <p className="text-2xl text-gray-300 text-yellow-400 mb-4">
            Star Wars APIs & Explorer
          </p>
          <p className="text-2xl text-gray-100 mb-8 text-gray-900">
            All the Star Wars data you've ever wanted!
            <br />
            <span className="font-semibold">
              Planets, Spaceships, Vehicles, People, Films & Species
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button className="bg-[#FFE81F] hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
              Playground
            </button>
            <button className="bg-[#FFE81F] hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
              About
            </button>
            <button className="bg-[#FFE81F] hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
              Documentation
            </button>
          </div>

          <div className="flex items-center justify-center mb-12">
            <span className="text-yellow-400 text-2xl mr-2">🎉🎉</span>
            <p className="text-lg text-gray-700 mr-2">
              over <span className="font-bold text-yellow-400">100,000</span>{" "}
              API Requests served daily
            </p>
            <span className="text-yellow-400 text-2xl ml-2">🎉🎉</span>
          </div>

          <div className="flex justify-center items-center mb-12">
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center w-full max-w-lg"
            >
              <input
                type="text"
                value={urlApi}
                onChange={(e) => {
                  setUrlApi(e.target.value);
                }}
                className="w-full bg-[#F6F4E7] text-grey-700 py-4 pl-6 pr-16 rounded-l-lg text-lg border-2 border-[#FFE81F] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <a
                href={urlApi}
                className=" bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-r-lg transition duration-300 ease-in-out"
              >
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
              <button
                className="ml-2 bg-[#FFE81F] hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
                type="submit"
              >
                Get
              </button>
            </form>
          </div>
          <h2 className="p-1 w-4/5 bg-[#F6F3D8] ml-auto mr-auto rounded-tl-lg rounded-tr-lg border-t-3 border-[#FFE81F]">
            Result:
          </h2>
          <div className="flex justify-center items-center">
            <pre className="w-4/5 text-left border-b-3 border-[#FFE81F] bg-[#F6F4E7] p-4 rounded-br-lg rounded-bl-lg overflow-auto mr-20 ml-20">
              <code>
                {status === "loading"
                  ? "Loading data..."
                  : status === "failed"
                  ? `Error: ${error}`
                  : data
                  ? JSON.stringify(data, null, 2)
                  : "Enter URL and click Get to see results"}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
