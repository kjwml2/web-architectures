# Project Overview

This is a full-stack application that consists of a backend built with Express and TypeScript, and a frontend built with React and Vite. The application is structured to provide a clean separation between the frontend and backend components.

## Project Structure

```
my-fullstack-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── healthController.ts
│   │   ├── routes
│   │   │   └── health.ts
│   │   ├── middleware
│   │   │   └── errorHandler.ts
│   │   ├── utils
│   │   │   └── logger.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── src
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   └── Home.tsx
│   │   ├── components
│   │   │   └── Header.tsx
│   │   ├── styles
│   │   │   └── index.css
│   │   └── vite-env.d.ts
│   └── README.md
├── .gitignore
└── README.md
```

## Backend

The backend is built using Express and TypeScript. It includes:

- **Health Check Endpoint**: A simple health check route to verify that the server is running.
- **Error Handling Middleware**: A middleware to handle errors gracefully.
- **Logging Utility**: A utility function to log messages to the console.

### Getting Started

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run start
   ```

## Frontend

The frontend is built using React and Vite. It includes:

- **Main Application Component**: The entry point of the React application.
- **Home Page**: A simple home page component.
- **Header Component**: A reusable header component for the application.

### Getting Started

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.