
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "./counter/redusers/counterReducer ";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-sm text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Лічильник
          </h1>
          <p className="text-6xl font-bold text-blue-600 mb-8">{count}</p>
          <div className="flex justify-center space-x-4">
            <button onClick={()=>{dispatch(increment())}} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Збільшити
            </button>
            <button onClick={()=>{dispatch(decrement())}} className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Зменшити
            </button>
            <button onClick={()=>{dispatch(reset(0))}} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Скинути
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
