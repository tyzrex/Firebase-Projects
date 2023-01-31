import Navbar from "./Navbar";
import Task from "./Task";
import { useState, useEffect } from "react";
import { ITasks } from "./Interface";
import { collection, deleteDoc, onSnapshot, query,doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Loading from "./Loading";

const Home = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const setLoading = useState<boolean>(true);

  const getTodos = () => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      try {
        const fetchedTasks: ITasks[] = [];
        querySnapshot.forEach((doc) => {
          fetchedTasks.push(doc.data() as ITasks);
          // get the id of the document
          fetchedTasks[fetchedTasks.length - 1].id = doc.id;
        }),
          setTasks(fetchedTasks);
          setLoading[1](false);
      } catch (err) {
        console.log(err);
      }
    });
    };

    const deleteTodo = async (id: string) => {
        try {
            await deleteDoc(doc(db, "todos", id));
        } catch (err) {
            console.log(err);
        }
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
        {setLoading[0] ? (
            <Loading />
          ) : (
            <div>
              
              {
                tasks.length>0 ? tasks.map((task) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    due={task.due}
                    deleteTodo={deleteTodo}
                  />
                )) : <h1 className="text-2xl text-center font-bold text-white mt-6">No tasks</h1>

              }

            </div>
          )}

         </div>
      </div>
    </div>
  );
};

export default Home;
