# Front-End set up

```pwsh
const [name, setName] = useState([]);
```
the use of states that we have implemented is to retrieve and store the information retrieved from the API over in the server folder

### Updating Input

```pwsh
const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };
```

in the handleInputChange function, this will handle any time there is a change in the input box

The event.target.value holds whatever is in the input box at the time of the button being pressed

so it updates the TaskType with whatever is in the input field

### Retrieve infromation from backend

```pwsh
axios.get(`http://127.0.0.1:8000/api/tasks/${TaskType}`)
    .then((response) => {
      setName(response.data)
```
the axios.get line retrieves the information that can be found at that
specific URL and then sets it as the current variable of Name

### Front-end input box

```pwsh
<label>
    Task Type: <input name="myInput" onChange={handleInputChange} />
</label>
```
This label is meant to display the input tag on the html document with the label of "Task Type". So that whenever a new input is added, the 'handleInputChange' is called and sets the 'TaskType' variable to whatever was just added.

### Listing the information
```pwsh
{Array.isArray(dynamicTasks) ? (
            dynamicTasks.map((task, index) => <li key={index}>{task}</li>)
          ) : (
            <li>{dynamicTasks}</li>
          )}
```
