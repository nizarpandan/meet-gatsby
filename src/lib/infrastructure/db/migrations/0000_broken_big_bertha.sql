CREATE TABLE IF NOT EXISTS "Companies" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Name" text NOT NULL,
	"Address" text,
	"City" text,
	"State" text,
	"Country" text,
	"CreatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Employees" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"EId" varchar,
	"FirstName" varchar(256) NOT NULL,
	"LastName" varchar(256) NOT NULL,
	"CompanyId" uuid,
	"UserId" varchar,
	"CreatedAt" timestamp DEFAULT now(),
	CONSTRAINT "Employees_EId_unique" UNIQUE("EId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Roles" (
	"Id" integer PRIMARY KEY NOT NULL,
	"Name" varchar(256) NOT NULL,
	"Description" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UserRoles" (
	"UserId" varchar(256) NOT NULL,
	"RoleId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"Id" varchar PRIMARY KEY NOT NULL,
	"Email" varchar,
	"FirstName" varchar(256) NOT NULL,
	"LastName" varchar(256) NOT NULL,
	"Picture" varchar(256) NOT NULL,
	"CreatedAt" timestamp DEFAULT now(),
	CONSTRAINT "Users_Email_unique" UNIQUE("Email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Employees" ADD CONSTRAINT "Employees_CompanyId_Companies_Id_fk" FOREIGN KEY ("CompanyId") REFERENCES "Companies"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Employees" ADD CONSTRAINT "Employees_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "UserRoles" ADD CONSTRAINT "UserRoles_RoleId_Roles_Id_fk" FOREIGN KEY ("RoleId") REFERENCES "Roles"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
