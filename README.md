# Weekend SQL To Do List

## Description

This app will allow the user to add a task to their to-do list. When the user clickes add, their new task will be added to the database as well as display on the DOM. They'll be able to mark it as completed when they've finished a task. If they wish to remove a task, they have the option to delete it as well.

## Setup

Create the following table with a database named `weekend-to-do-app`, then run `npm install` and `npm start`. The app will be displayed on http://localhost:5000/ .

```SQL
CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"date" date DEFAULT current_date,
	"task" VARCHAR (250) NOT NULL,
	"notes" VARCHAR (500),
    "status" VARCHAR (80) DEFAULT 'INCOMPLETE'
);
```

## Technology Used

- jQuery
- Node
- SQL
- Express
- CSS
