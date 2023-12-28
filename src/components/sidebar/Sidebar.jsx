import "./sidebar.scss"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { colors } from "@mui/material";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">admin</span>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
         <li>
          <SpaceDashboardIcon className="icon"/>
          <span>Dashboard</span>
         </li>

         <p className="title">LIST</p>
         <Link to="/users" style={{textDecoration:"none"}}>
         <li>
         <PeopleRoundedIcon className="icon"/>
          <span>Users</span>
          
         </li>
         </Link>

         <Link to="/products" style={{textDecoration:"none"}}>
         <li>
          <ProductionQuantityLimitsRoundedIcon className="icon"/>
          <span>Products</span>
         </li>
         </Link>

         <li>
          <BookmarkBorderRoundedIcon className="icon"/>
          <span>Orders</span>
         </li> 

         <li>
          <DeliveryDiningRoundedIcon className="icon"/>
          <span>Delivery</span>
         </li>

        <p className="title">USEFUL</p>
         <li>
          <SignalCellularAltRoundedIcon className="icon"/>
          <span>Stats</span>
         </li> 

        
         <li>
          <NotificationsNoneRoundedIcon className="icon"/>
          <span>Notifications</span>
         </li> 
      
         <p className="title">SERVICE</p>
         <li>
          <HealthAndSafetyRoundedIcon className="icon"/>
          <span>System Health</span>
         </li> 

         <li>
          <LoginRoundedIcon className="icon"/>
          <span>Logs</span>
         </li> 

         <li>
          <SettingsSuggestRoundedIcon className="icon"/>
          <span>Settings</span>
         </li> 

         <p className="title">USER</p>

         <li>
          <Person2RoundedIcon className="icon"/>
          <span>Profile</span>
         </li> 

         <li>
          <LogoutRoundedIcon className="icon"/>
          <span>Logout</span>
         </li> 

         </ul>
      </div>
      <div className="bottom">color options</div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>

    </div>
  );
};

export default Sidebar