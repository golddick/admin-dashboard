import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'



function single() {
  return (
    <div className='single'>
     <Sidebar/>
     <div className="singleContainer">
      <Navbar/>
     </div>
      </div>
  )
}

export default single