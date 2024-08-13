# OracleGUIServices

This project is a Oracle GUI Services built with React for the frontend and Express.js for the backend. It includes various functionalities such as creating tables, inserting data, viewing data, updating records, and managing user permissions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [Frontend Routes](#frontend-routes)
  - [Backend Routes](#backend-routes)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, insert, view, update, and delete data in tables.
- Manage user permissions.
- User authentication and authorization.
- Documentation for all SQL operations.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/TechWithChhotu/OracleGUIServices.git
   ```

2. Navigate to the project directory:

   ```sh
   cd OracleGUI
   ```

3. Install frontend dependencies:

   ```sh
   cd client
   npm install
   ```

4. Install backend dependencies:

   ```sh
   cd ../server
   npm install
   ```

5. Set up the environment variables for the backend by creating a `.env` file in the `server` directory with the following content:

   ```env
   PORT=3000
   ```

ORACLE_USERNAME=username
ORACLE_PASSWORD=password
ORACLE_CONNECTION_STRING="localhost/XEPDB1"

JWT_SECRET = "YOUR_SECRET_CODE";

````

6. Start the development servers:

```sh
# In one terminal, start the backend server
cd backend
npm start

# In another terminal, start the frontend development server
cd client
npm run dev
````

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Use the navigation menu to access different functionalities of the application.

## Routes

### Frontend Routes

| Route                  | Component           | Description                          |
| ---------------------- | ------------------- | ------------------------------------ |
| `/`                    | Home                | Home page                            |
| `/create-table`        | CreateTableForm     | Create a new table                   |
| `/insert-into-table`   | InsertDataForm      | Insert data into a table             |
| `/view-data`           | TableDataViewer     | View data from a table               |
| `/update-table-record` | TableDataUpdater    | Update table records                 |
| `/delete-from-table`   | TableDataDeleter    | Delete data from a table             |
| `/truncate-table`      | TruncateTable       | Truncate a table                     |
| `/drop-table`          | DropTable           | Drop a table                         |
| `/alter-table`         | AlterTable          | Alter table schema                   |
| `/table-schema-viewer` | TableSchemaViewer   | View table schema                    |
| `/login`               | Login               | Login page                           |
| `/services`            | Services            | Services page                        |
| `/about`               | About               | About page                           |
| `/contact`             | Contact             | Contact page                         |
| `/team-member`         | TeamMembers         | Team members page                    |
| `/set-workspace`       | SetWorkspace        | Set workspace page                   |
| `/sign-up`             | SignUp              | Sign up page                         |
| `/sql-terminal`        | SqlTerminal         | SQL terminal for executing queries   |
| `/create-db-user`      | CreateDbUserForm    | Create a new database user           |
| `/grant-permission`    | GrantPermissionForm | Grant permissions to a database user |
| `/learn`               | DocumentationPage   | Documentation page                   |
| `/test`                | Temp                | Temporary test page                  |

### Backend Routes

| Method | Route                | Description                          |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/get-tables`        | Fetch all tables in the database     |
| POST   | `/get-table-columns` | Fetch columns of a specific table    |
| POST   | `/insert-table-data` | Insert data into a specific table    |
| POST   | `/create-table`      | Create a new table                   |
| POST   | `/update-table-data` | Update data in a specific table      |
| POST   | `/delete-table-data` | Delete data from a specific table    |
| POST   | `/truncate-table`    | Truncate a specific table            |
| POST   | `/drop-table`        | Drop a specific table                |
| POST   | `/alter-table`       | Alter the schema of a specific table |
| POST   | `/create-user`       | Create a new user                    |
| POST   | `/grant-permission`  | Grant permissions to a user          |
| POST   | `/login`             | Authenticate user and create session |
| POST   | `/logout`            | Logout user and destroy session      |
| GET    | `/get-users`         | Fetch all users                      |

### Authentication

- The application uses session-based authentication.
- User authentication status is managed using context in the frontend.
- Protected routes are accessible only to authenticated users.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Create a pull request.

### License

This project is licensed under the MIT License.
