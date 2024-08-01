# Project Title

## Overview
This project consists of a server-side and client-side application.

## Server-Side
- **Technologies Used**: Node.js, TypeScript, SQL Server, AWS RDS, Sequelize ORM
- **Description**: The server side is built with Node.js using TypeScript. A SQL Server instance is set up on AWS RDS to manage the database. The interaction with the database is handled using Sequelize ORM.

## Client-Side
- **Technologies Used**: React, TypeScript, Redux Toolkit, Material-UI
- **Description**: The client side is built with React using TypeScript. Redux Toolkit is used for store management and handling server requests. Material-UI is used for styling the application.

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn
- SQL Server instance on AWS RDS

### Server-Side Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/biskall/ShoppingList.git
    cd ShoppingList/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory with the following content for database connection:
    ```env
    DB_HOST=your-rds-endpoint
    DB_USER=your-db-username
    DB_PASSWORD=your-db-password
    DB_NAME=your-db-name
    ```

4. Start the server:
    ```bash
    npm run build
    npm run start
    ```

### Client-Side Setup
1. Navigate to the client directory:

2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the client application:
    ```bash
    npm start
    ```

## Contact
- Itai Levy - [itaibiskall@gmail.com](mailto:itaibiskall@gmail.com)
- GitHub: [biskall](https://github.com/biskall)
