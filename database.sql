CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"date" date DEFAULT current_date,
	"task" VARCHAR (250) NOT NULL,
	"notes" VARCHAR (500),
    "status" VARCHAR (80) DEFAULT 'INCOMPLETE'
);

INSERT INTO "tasks"("task", "notes") VALUES('Schedule doctors appointment', 'Papercut');
INSERT INTO "tasks"("task", "notes") VALUES('Cancel cater', 'Cancel by Moday!!! Caterer: McDonalds');
INSERT INTO "tasks"("task", "notes") VALUES('Clean room', 'Laundry and vacuum');
INSERT INTO "tasks"("task", "notes") VALUES('Dinner date', 'Dinner at 6PM Monday with friends, BRING WINE');
INSERT INTO "tasks"("task", "notes") VALUES('Pick up family', 'Landing at MSP Wednesday at 8PM');
INSERT INTO "tasks"("task", "notes") VALUES('Buy groceries', 'Apples, bananas, oranges, lettuce, tomato, eggs, ham');
INSERT INTO "tasks"("task", "notes") VALUES('Bring dog to groomers', 'PetSmart at 12PM with XYZ');
INSERT INTO "tasks"("task", "notes") VALUES('Garden', 'Replace fertilizer, add new flowers, clean fish pond, refill bird feeder,  trim trees');
INSERT INTO "tasks"("task", "notes") VALUES('Food tasting', 'Food tasting at Costco with friends');
INSERT INTO "tasks"("task", "notes") VALUES('Call Dad', 'Check in, get updates');
INSERT INTO "tasks"("task", "notes") VALUES('Make cake', 'For XYZs birthday');