import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TheWorld from './TheWorld'
import Message from './Message'
import Profile from './Profile'
import Settings from './Settings'


const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/TheWorld' Component={TheWorld} />
          <Route path='/Message' Component={Message} />
          <Route path='/Profile' Component={Profile} />
          <Route path='/Settings' Component={Settings} />
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default Home
