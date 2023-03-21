import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

function HomeWrapper() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeWrapper