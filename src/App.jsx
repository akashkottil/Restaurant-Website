import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Welcome from './Pages/Welcome/Welcome'
import Footer from './Components/Footer/Footer'
import Partners from './Pages/Partners/partners'
import Booking from './Pages/Booking/Booking'

function App() {

  return (
    <>
    <Header/>
    <Welcome/>
    <Partners/>
    <Booking/>
    <Footer/>
    </>
  )
}

export default App
