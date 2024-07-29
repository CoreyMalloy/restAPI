import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [taskType, setTaskType] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [current, setCurrent] = useState([]);
  const [urgent, setUrgent] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [dynamicTasks, setDynamicTasks] = useState([]);

  useEffect(() => {
    fetchTasks('backlog', setBacklog);
    fetchTasks('current', setCurrent);
    fetchTasks('urgent', setUrgent);
    fetchTasks('completed', setCompleted);
  }, []);

  const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };

  const fetchTasks = async (taskType, setState) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/tasks/${taskType}`);
      setState(response.data);
    } catch {
      setState("error");
    }
  };

  const handleFetchTasks = () => {
    if (taskType) {
      fetchTasks(taskType, setDynamicTasks);
    }
  };

  return (
    <>
      <div id='Container'>
        <label>
          Task Type: <input name="myInput" onChange={handleTaskTypeChange} />
        </label>
        <button className="Hello" onClick={handleFetchTasks}>Submit</button>
        <ul>
          {Array.isArray(dynamicTasks) ? (
            dynamicTasks.map((task, index) => <li key={index}>{task}</li>)
          ) : (
            <li>{dynamicTasks}</li>
          )}
        </ul>
        <label>
          Add Task: <input/>
        </label>
        <button className="Add">Add</button>

        <div className='list'>
          <h2>Backlog</h2>
          <ul>
            {Array.isArray(backlog) ? (
              backlog.map((task, index) => <li key={index}>{task}</li>)
            ) : (
              <li>{backlog}</li>
            )}
          </ul>
        </div>

        <div className='list'>
          <h2>Current</h2>
          <ul>
            {Array.isArray(current) ? (
              current.map((task, index) => <li key={index}>{task}</li>)
            ) : (
              <li>{current}</li>
            )}
          </ul>
        </div>

        <div className='list'>
          <h2>Urgent</h2>
          <ul>
            {Array.isArray(urgent) ? (
              urgent.map((task, index) => <li key={index}>{task}</li>)
            ) : (
              <li>{urgent}</li>
            )}
          </ul>
        </div>

        <div className='list'>
          <h2>Completed</h2>
          <ul>
            {Array.isArray(completed) ? (
              completed.map((task, index) => <li key={index}>{task}</li>)
            ) : (
              <li>{completed}</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
