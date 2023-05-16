import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../assest/011.jpg'
import Chart from '../../components/charts/charts'
import Table from '../../components/Table/Table'



function single() {
  return (
    <div className='single'>
     <Sidebar/>
     <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={img} alt="" className='itemImg'/>
            <div className="details">
              <h1 className="itemTitle">Sam loco</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">sam@loco.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+234 993 83 0892</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Face Me i Face You</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">9ja</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightChart">
          <Chart aspect={3 / 1} title='Spending (Last 3 Weeks)'/>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Trasaction</h1>
        <Table/>
      </div>
     </div>
      </div>
  )
}

export default single