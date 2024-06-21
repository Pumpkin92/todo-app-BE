The hosted version of the API can be accessed via https://todo-app-be-1.onrender.com

if you would like to run this server locally please begin by cloning the repo on gitrhub and setting up a repository. git clone https://github.com/Pumpkin92/todo-app-BE.git

To set up the database correctly you'll need the following commands:

```bash
npm i (this will install all the dependancies required for the project)
node dist/index.js (this will run the development server locally on your machine)
```

To ensure the databse is kept secure, a .env file will need to be set up with the database name. These files are git ignored, to ensure the safety of the database. For the purposes of accessing this repo the env file content should be saved as - DATABASE_URL="postgresql://to-do-app_owner:ZQmVB6qzpM0r@ep-red-breeze-a228wr0z.eu-central-1.aws.neon.tech/to-do-app?sslmode=require"
