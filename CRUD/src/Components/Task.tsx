import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateTodo from "./Updatetodo";

type Props = {
  id : string;
  title: string;
  description: string;
  due: string;
  deleteTodo: (id: string) => void;
};

const Task = (props: Props) => {
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
      props.deleteTodo(props.id);
    };

    const data = {
      id: props.id,
      title: props.title,
      description: props.description,
      due: props.due,
    };


  return (
    <div>
      <div className="card h-auto w-80 md:w-[600px] bg-gray-700 mb-10 text-gray-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
            <p>Due Date: {props.due}</p>
          <div className="card-actions justify-between">
          <UpdateTodo id= {props.id} title={props.title} description={props.description} due={props.due} /> 
            <button className="btn bg-gray-900" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
