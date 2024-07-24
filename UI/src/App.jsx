import './App.css';
import { useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState([]);
  const [TaskType, setTaskType] = useState("");

  const handleInputChange = (event) => {
    setTaskType(event.target.value);
  };

  const names = async () => {
    axios.get(`http://127.0.0.1:8000/api/tasks/${TaskType}`)
    .then((response) => {
      setName(response.data)
    }).catch(() => {
      setName("error")
    });
  }

  return (
    <>
    <div id='Container'>
      <label>
        Task Type: <input name="myInput" onChange={handleInputChange} />
      </label>
      <button className="Hello" onClick={ names }>Submit</button>
      <p>{ name }</p>
    </div>
    </>
  );
}

export default App;