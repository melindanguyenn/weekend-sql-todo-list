CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"notes" VARCHAR (500),
    "status" VARCHAR (80) DEFAULT 'Uncomplete',
    "date" date
);


INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Schedule doctors appointment', 'Papercut', 'UNCOMPLETE');
INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Cancel cater', 'Cancel by Moday!!! Caterer: Mels Cafe', 'UNCOMPLETE');
INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Clean room', 'Laundry and vacuum', 'UNCOMPLETE');
INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Dinner date', 'Dinner at 6PM Monday with friends, BRING WINE', 'UNCOMPLETE');
INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Pick up family', 'Landing at MSP Wednesday at 8PM', 'UNCOMPLETE');
INSERT INTO "tasks"("date", "task", "notes", "status") VALUES('06/06/2002', 'Buy groceries', 'Apples, bananas, oranges, lettuce, tomato, eggs, ham', 'UNCOMPLETE');