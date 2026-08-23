import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './project.css'
// import App from "./App.jsx";
// import Tutorial from './Tutorial.jsx'
import project from "./project.jsx";

{/* <project></project> */}
ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <React.StrictMode>
    <BrowserRouter> <project/> </BrowserRouter> 
  </React.StrictMode>,
)
