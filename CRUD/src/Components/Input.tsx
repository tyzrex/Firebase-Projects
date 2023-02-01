import { useEffect, useState } from "react";
import { ITasks } from "./Interface";
import uuid from "react-uuid";
import { db } from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import { toast } from "react-toastify";

const Input = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const [tasks, setTasks] = useState<ITasks[]>([]);

  const addTask = () => {
    const newTask = {id: uuid() , title: title, description: description, due: dueDate };
    setTasks([...tasks, newTask]);
    try{
        addDoc(collection(db, "todos"), newTask);
        toast.success("Task added successfully");

    } catch (err) {
        console.log(err);
    }
    };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
    setTitle("");
    setDescription("");
    setDueDate("");
    
    };

  console.log(title, description, dueDate);
  return (
    <div className="flex w-full h-auto justify-center items-center mt-10">
      <div className="form-control w-full flex justify-center items-center ">
        <h1 className="text-3xl text-center font-bold text-white">
          Add a new task
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="mt-10">
          <h1 className="text-xl text-gray-400">Title</h1>
          <input
            type="text"
            placeholder="Task Title"
            className="input input-bordered bg-gray-700 mt-2 text-gray-200 w-[300px] md:w-[600px] mx-auto"
            value={title}
            onChange={handleChange}
            required = {true}
          />
        </div>

        <div className="mt-10">
          <h1 className="text-xl text-gray-400">Description</h1>
          <textarea
            className="textarea textarea-bordered w-[300px] md:w-[600px] mt-2 text-gray-200 bg-gray-700"
            onChange={handleChangeDescription}
            value={description}
            placeholder="Task Description"
            required= {true}
          ></textarea>
        </div>

        <div className="mt-10">
          <h1 className="text-xl text-gray-400">Due Date</h1>
          <input
            type="date"
            className="input input-bordered w-[300px] bg-gray-700 mt-2 text-gray-200 md:w-[600px] mx-auto"
            onChange={handleDueChange}
            value={dueDate}
            required = {true}
          />
        </div>

        <div className="mt-10">
          <button type="submit" className="btn bg-gray-700">Add Task</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
