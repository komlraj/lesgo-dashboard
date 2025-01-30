# LesGo Dashboard
Demo Link: https://lesgo-dashboard.vercel.app/

This is a dynamic and responsive dashboard application built with React, featuring user authentication, a profile page, analytics visualization, and more. It supports dark and light themes and is designed to be simple, intuitive, and scalable.

## Features

- **User Authentication**: Login form with validation (email and password).
- **Profile Page**: View and edit user profile details (e.g., name, number, sex).
- **Analytics Page**: Displays a bar chart of sales data for the last 7 days.
- **Dark/Light Theme Toggle**: Switch between dark and light themes for the dashboard.


## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/komlraj/lesgo-dashboard.git
   
2. Navigate to the project directory:
```bash
  cd lesgo-dashboard
```

3. Install dependencies:
```bash
  npm install
```

4. Start the development server:
```bash
  npm start
```

5. Open your browser and navigate to `http://localhost:3000` to see the dashboard.


## Libraries & Tools Used
- **React** – Core framework for building the UI.
- **Styled-components** – For modular, scoped styling.
- **Zustand** – For state management (user authentication, theme).
- **Zod** – For handling form validation and ensuring data integrity.
- **Chart.js & React-chartjs-2** – For rendering data visualizations.
- **LocalStorage** – To persist user data across sessions.

