import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackIcon from '@mui/icons-material/Feedback';
import ReportIcon from '@mui/icons-material/Report';
import InsightsIcon from '@mui/icons-material/Insights';
import PeopleIcon from '@mui/icons-material/People';

// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpIcon from '@mui/icons-material/Help';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './sidebar.scss'


export default function SideBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
////////////////////////////////
const menuItemStyles = {
  root: {
    fontSize: '14px',
    fontWeight: 500,
  },
  button: {
    [`&.active`]: {
      color: 'white',
      backgroundColor:'gray',
    },
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
 
};
//////////////////////////////////

  return (
    <div style={{padding :"0px"}}>

<Sidebar
sx={{ display: { xs: 'block', md: 'none' } }}
 borderRight = '2px solid black'
collapsed={!isSidebarVisible}
 rootStyles={{
                 height: '100vh',
                 float:'left',
                 marginRight: '20px',
                 marginTop: '10px',
                 webkitBboxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.47)',
                 boxShadow: '0px 0px 1px 0px rgba(57, 56, 56, 0.47)'             
             }}
>
   <div>  
   
 <div>
 <Menu
   menuItemStyles={menuItemStyles}
 >
    <MenuItem
    icon= {<DashboardIcon/>}
    component={<NavLink/>}
  to="/"
  activeClassName="active"
    > 
    Overview</MenuItem>
    <SubMenu 
    label="Audience"
    icon={<PeopleIcon/>}
    >
    
      <MenuItem>line 1</MenuItem>
      <MenuItem> Line 2 </MenuItem>
    </SubMenu>
    <MenuItem
    
    icon= {<InsightsIcon/>}
    component={<NavLink/>}
    to="/new"
    activeClassName="active"
    >
       Insight 
    </MenuItem>
    {/* </NavLink> */}
    <MenuItem
    icon={<ReportIcon/>}
    component={<NavLink/>}
  to="/sign-in"
  activeClassName="active"
    >
     Reports </MenuItem>
    
    <MenuItem 
    icon={<NotificationsNoneIcon  />}
    component={<NavLink/>}
  to="/sign-up"
  activeClassName="active"
    > Notification </MenuItem>
    
    <MenuItem icon={<SettingsApplicationsIcon/>}> Settings </MenuItem>

  </Menu>   
 </div>
  <div >
  <Menu menuItemStyles={menuItemStyles}>
    
    <MenuItem icon= {<HelpIcon/>}> Help </MenuItem>
    
    <MenuItem icon={<FeedbackIcon/>}> Feedback </MenuItem>
  </Menu>        
  </div>
  
 <div >
  <Menu menuItemStyles={menuItemStyles}>
   
    <MenuItem icon= {<AccountCircleOutlinedIcon />}> Profile </MenuItem>
    
    <MenuItem icon={<ExitToAppIcon />}> Log Out </MenuItem>
  </Menu>        
  </div>
  </div>
</Sidebar>
    </div>

  )
}

