import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const container = document.getElementById('root');

// Check if we already created a root for this container
if (!window.reactRoot) {
  window.reactRoot = createRoot(container);
}

window.reactRoot.render(<App />);