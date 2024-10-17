import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import ScrollMenu from './components/scrollmenu/ScrollMenu'
import CarServices from './components/carservices/CarServices'
import CuratedServices from './components/curatedServices/CuratedServices'
import Card from './components/curatedServices/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="background-container">
        <Navbar />
        <Banner />
      </div>
      <ScrollMenu />
      <CarServices />
      <Card />
      <CuratedServices />
    </div>
  )
}

export default App
