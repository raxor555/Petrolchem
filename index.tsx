
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Could not find root element to mount the application.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render Petrolchem application:", error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1 style="color: #BE1E2D;">PETROLCHEM</h1>
      <p>The application failed to load. Please check the console for details.</p>
    </div>`;
  }
}
