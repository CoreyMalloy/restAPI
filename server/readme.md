## Installation

### Install venv

```pwsh
python -m venv .venv
```
This will install your virtual environment so you dont globally install packages

```pwsh
.venv.Scripts.activate
```
This will start your virtual environment

### Install Packages with pip

```pwsh
pip install fastapi uvicorn
pip install fastapi-cors
```
This installs our api framework and hosting service

### Running our API

```pwsh
python main.py
```
Runs the server at the localhost port defines in uvicorn instance

###Closing Server
```pwsh
deactivate
```
This closes your venv. If not it will run forever

## Testing

```pwsh
backlog = [
    "Cut Grass", "Get Milk", "Pay Taxes"
]

current = [
    "Cleaning", "Vacuuming", "Laundry"
]

urgent = [
    "Oil Change", "Groceries", "Pray"
]

completed = [
    "Bible Reading", "Groceries", "Have fun"
]
```

This is all of the tasks that we have entered for testing sake

```pwsh
def tasks(lvl):
  match lvl:
    case "backlog":
      return backlog
    case "current":
      return current
    case "urgent":
      return urgent
    case "completed":
      return completed
    case _:
      return {"unknown": "unknown"}
```
we then add a switch statement for whichever information wants to be shown on the main screen depending which title is entered into the input box