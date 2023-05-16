import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SmsIcon from '@mui/icons-material/Sms';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
        <div className="top">
            <Link to='/' className="Link">
            <span className="logo">FLing</span>
            </Link >
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <Link to='/' className="Link">
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                <Link to='/users' className="Link">
                    <PeopleOutlineSharpIcon className="icon"/>
                    <span>Users</span>
                    </Link>
                </li>
                <li>
                <Link to='/products' className="Link">
                    <ProductionQuantityLimitsOutlinedIcon className="icon"/>
                    <span>Products</span>
                    </Link>
                </li>
                <li>
                    <ShoppingCartIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">MAIN</p>
                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <SmsIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <Person2Icon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:'LIGHT'})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:'DARK'})}></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar