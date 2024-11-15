import React from 'react'
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Nav from './Components/Navbar/Navbar.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
       <Nav/>
       <Routes>
         <Route path='/' element={<Home/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
