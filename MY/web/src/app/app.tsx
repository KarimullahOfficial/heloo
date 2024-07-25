import React from 'react';
import styles from './app.module.css'; // Import your CSS module

export function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Welcome to the React App</h1>
      <p>This is a React application in an Nx monorepo.</p>
    </div>
  );
}

export default App;
