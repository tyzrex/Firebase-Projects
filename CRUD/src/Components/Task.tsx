import { db } from "../firebase";
import { collection, deleteDoc, doc, updateDoc} from "firebase/firestore";

type Props = {
   id : string;
  title: string;
  description: string;
  due: string;
};

const Task = (props: Props) => {
    const handleDelete =(e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(props.id);
        try {
           //remove the task from the database
            deleteDoc(doc(db, "todos", props.id));
            

        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, "todos", props.id), {
                title: "Updated Title",
                description: "Updated Description",
                due: "Updated Due Date",
            });
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
      <div className="card h-auto w-80 md:w-96 bg-gray-700 text-gray-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
            <p>{props.due}</p>
          <div className="card-actions justify-between">
          <button className="btn bg-gray-900" onClick={handleUpdate}>Edit</button>
            <button className="btn bg-gray-900" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
