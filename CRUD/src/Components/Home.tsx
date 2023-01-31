import Navbar from "./Navbar";
import Task from "./Task";
import { useState, useEffect } from "react";
import { ITasks } from "./Interface";
import { collection, deleteDoc, onSnapshot, query,doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loading from "./Loading";

const Home = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const getTodos = () => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      try {
        const fetchedTasks: ITasks[] = [];
        querySnapshot.forEach((doc) => {
          fetchedTasks.push(doc.data() as ITasks);
        }),
          setTasks(fetchedTasks);
      } catch (err) {
        console.log(err);
      }
    });
    };

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="md:mx-28 mx-10">
        <h1 className="text-3xl text-center font-bold text-white mt-6">
          Tasks
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-items-center mt-5 gap-6">
        {tasks.map((task) => (
                    <Task
                    id = {task.id}
                      key={task.id}
                      title={task.title}
                      description={task.description}
                      due={task.due}
                    />
                  ))}
         </div>
      </div>
    </div>
  );
};

export default Home;
