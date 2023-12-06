

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChat/LineChart'
// import { BarChart } from 'recharts'
import BarChart from './Components/BarChart/BarChart'
import PayChart from './Components/PayChart/PayChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {

 
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-orange-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PayChart></PayChart>
    </>
  )
}

export default App
