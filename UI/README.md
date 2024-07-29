# Front-End set up

```pwsh
const [name, setName] = useState([]);
```
The use of states that we have implemented is to retrieve and store the information retrieved from the API over in the server folder

### Updating Input

```pwsh
const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };
```

In the handleInputChange function, this will handle any time there is a change in the input box

The event.target.value holds whatever is in the input box at the time of the button being pressed

So it updates the TaskType with whatever is in the input field

### Retrieve infromation from backend

```pwsh
axios.get(`http://127.0.0.1:8000/api/tasks/${TaskType}`)
    .then((response) => {
      setName(response.data)
```
The axios.get line retrieves the information that can be found at that
specific URL and then sets it as the current variable of Name

## Front-end input box

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

This block of code is a short hand for an if-else statement, saying that " if the item that is being passed through is an array, then we will set it up in the format of a list.

The first part parses through the array retrieving the variables "task" and "index"

Then it puts it into a list format, using the two variables, to coordinate them

If what is being passed through is not a list then it will just put the whole thing into a list without parsing and separating the components
