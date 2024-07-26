# Front-End set up

```pwsh
const [name, setName] = useState([]);
```
the use of states that we have implemented is to retrieve and store the information retrieved from the API over in the server folder

```pwsh
setTaskType(event.target.value);
```
in the handleInputChange function, this will handle any time there is a change in the input box

The event.target.value holds whatever is in the input box at the time of the button being pressed

so it updates the TaskType with whatever is in the input field

``pwsh
axios.get(`http://127.0.0.1:8000/api/tasks/${TaskType}`)
    .then((response) => {
      setName(response.data)
```
the axios.get line retrieves the information that can be found at that
specific URL and then sets it as the current variable of Name