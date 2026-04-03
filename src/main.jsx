import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/js/jquery-3.1.1.min.js'
import './assets/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)