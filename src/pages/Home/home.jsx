import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/charts'
import Table from '../../components/Table/Table'


function home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
        </div>
    </div>
  )
}

export default home