CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"date" date DEFAULT current_date,
	"task" VARCHAR (250) NOT NULL,
	"notes" VARCHAR (500),
    "status" VARCHAR (80) DEFAULT 'INCOMPLETE'
);


INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Schedule doctors appointment', 'Papercut');
INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Cancel cater', 'Cancel by Moday!!! Caterer: McDonalds');
INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Clean room', 'Laundry and vacuum');
INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Dinner date', 'Dinner at 6PM Monday with friends, BRING WINE');
INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Pick up family', 'Landing at MSP Wednesday at 8PM');
INSERT INTO "tasks"("date", "task", "notes") VALUES(current_date, 'Buy groceries', 'Apples, bananas, oranges, lettuce, tomato, eggs, ham');