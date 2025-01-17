import { useQuery } from "@apollo/client";
import { GET_TASKS } from "./queries";

import "./App.css";

const App = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {data.tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Completed: {task.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
