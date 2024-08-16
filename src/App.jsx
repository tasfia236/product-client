import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <div className="mx-auto max-w-full">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </>
  )
}

export default App
