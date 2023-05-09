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




const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo">FLing</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PeopleOutlineSharpIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <ProductionQuantityLimitsOutlinedIcon className="icon"/>
                    <span>Products</span>
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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar