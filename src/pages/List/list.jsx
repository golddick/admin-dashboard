import './list.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'



function list() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       <Datatable/>
      </div>
      </div>
  )
}

export default list