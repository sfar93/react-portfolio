import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
// import main from './components/main'
import { Outlet } from 'react-router-dom'
// import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
     <Header />
    
      <Outlet />
     
     <Footer />
    </>


  )
}

export default App
