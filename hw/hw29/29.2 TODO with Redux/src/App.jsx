import { useState, useEffect } from "react";
import "./App.css";
import MainInput from "./components/MainInput";
import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center text-3xl font-bold mt-5 mb-4">ToDo List</h1>
      <MainInput />
      <ToDoItem />
    </div>
  );
}

export default App;
