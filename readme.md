
## Files and Directories

- **Assets/images**: This directory contains images used in the project.
- **Components/User.js**: This file contains the definition of the `UserCard` web component.
- **Mocks/employeeList.json**: This file contains the mock employee data in JSON format.
- **scripts/define.js**: This script defines the `user-card` component and registers it with the custom elements registry.
- **scripts/main.js**: This script is the main entry point of the application. It handles the loading of employee data, rendering of `user-card` elements, and the search functionality.
- **style/style.css**: This file contains global styles for the application.
- **index.html**: This is the main HTML file that loads and displays the web component.
- **README.md**: This file provides an overview and documentation for the project.

## Employee Data Format

The `employeeList.json` file contains an array of employee objects with the following properties:

- `id`: Unique identifier for the employee
- `name`: First name of the employee
- `surname`: Last name of the employee
- `gender`: Gender of the employee
- `role`: Job role of the employee
- `experience`: Years of experience
- `account_status`: Status of the employee's account (e.g., active, inactive)
- `email`: Email address of the employee

Example:
```json
[
    {
        "id": 1,
        "name": "John",
        "surname": "Doe",
        "gender": "Male",
        "role": "Developer",
        "experience": 5,
        "account_status": "active",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane",
        "surname": "Smith",
        "gender": "Female",
        "role": "Designer",
        "experience": 3,
        "account_status": "inactive",
        "email": "jane.smith@example.com"
    }
]


## Example Usage

<user-card
    id="1"
    name="John"
    surname="Doe"
    gender="Male"
    role="Developer"
    experience="5"
    account_status="active"
    email="john.doe@example.com">
</user-card>


