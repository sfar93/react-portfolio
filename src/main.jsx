
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//giving the pathway to all routes on the web. 

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        
          index: true, // This makes AboutMe the default page at "/"
          element: <AboutMe />
        },
        {
        path: "/AboutMe",
        element: <AboutMe />

      },
      {
        path: "/Portfolio",
        element: <Portfolio />
      }, 
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Resume",
        element: <Resume />
      },
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>,
)
