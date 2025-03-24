import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LoginOrRegister from './auth/LoginOrRegister'
import Home from './home/Home'
import FAQ from './pages/FAQ'
import Profile from './pages/Profile'
import { User } from "lucide-react";

const App = () => {
  return (
    <div>
      {/* <header className="header">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"2",width:"69px"}} className="logo">
          <img src='logo.png' height={30} width={30}/>
          <span style={{margin:"2"}}>Vit Helpdesk</span>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/faq">Faq</Link></li>
          </ul>
        </nav>
        <div className="bag">
          <Link to="/profile"><span className="bag-icon"><User/></span></Link>
        </div>
      </header> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginOrRegister />} />
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </div>
  )
}

export default App
