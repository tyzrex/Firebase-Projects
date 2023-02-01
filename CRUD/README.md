# Todo App

This is a simple Todo application built using React, Typescript, Vite, Firebase, Tailwind CSS, and Daisy UI for styling.

## Setup

Here are the steps to setup the project:

1. Clone the repository `https://github.com/<username>/todo-app.git`
2. Run `npm install` or `yarn install` to install the dependencies
3. Create a project in Firebase and get the configuration details
4. Create a `.env` file in the root of the project and add the Firebase configuration details in the following format:

```
REACT_APP_API_KEY=<apiKey>
REACT_APP_AUTH_DOMAIN=<authDomain>
REACT_APP_DATABASE_URL=<databaseURL>
REACT_APP_PROJECT_ID=<projectId>
REACT_APP_STORAGE_BUCKET=<storageBucket>
REACT_APP_MESSAGING_SENDER_ID=<messagingSenderId>
REACT_APP_APP_ID=<appId>
```

## Running the project

To run the project, simply use the command `npm run dev` or `yarn dev`. This will start the development server and the application can be viewed at `http://localhost:3000` in the browser.

## Features

- Add, edit and delete todos
- Mark todo as completed
- Search and filter todos
- Responsive design using Tailwind CSS
- Styled using Daisy UI
- Real-time updates using Firebase

## Future improvements

- User authentication
- Sorting and categorizing todos

## Contributions

This is an open-source project, and contributions are always welcome. If you have any ideas or improvements, feel free to raise an issue or submit a pull request.
