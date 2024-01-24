import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { brighten } from './filters/brighten'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const filters : Filter[] = [
brightenFilter, 
roseColoredGlasses, 
grid, 
vignette,
];

export default filters;