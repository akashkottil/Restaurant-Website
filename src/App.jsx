import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Welcome from './Pages/Welcome/Welcome'
import Footer from './Components/Footer/Footer'
import Partners from './Pages/Partners/partners'

function App() {

  return (
    <>
    <Header/>
    <Welcome/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default App
