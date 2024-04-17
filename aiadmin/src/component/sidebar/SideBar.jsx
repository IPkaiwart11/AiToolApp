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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './sidebar.scss'


export default function SideBar() {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // const handleToggleSidebar = () => {
  //   setIsSidebarVisible(!isSidebarVisible);
  // };

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

 
// const menuItemStyles = {
//     button: {
//       // textDecoration:'none',
//       [`&:hover`]: {
//         backgroundColor: 'rgb(0,0,0,0.8)',
//         color: 'white',
//       },
     
//     },
  
// }

////////////////////////////////
const menuItemStyles = {
  root: {
    fontSize: '14px',
    fontWeight: 500,
  },
  // icon: {
  //   color: 'black',
  // },
 
  // subMenuContent: () => ({
  //   backgroundColor:'blue'
  // }),
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
                 webkitBboxShadow: '2px 2px 20px 1px rgba(0, 0, 0, 0.47)',
                 boxShadow: '2px 5px 20px 1px rgba(57, 56, 56, 0.47)'             
             }}
>
   <div>            
  <div style={{padding:'10px'}}>
               MAIN MENU
  </div>
   
 <div>
 <Menu
   menuItemStyles={menuItemStyles}
 >
  {/* <NavLink to='/'  activeclassname="active" > */}
   {/* <div className='navlink'>    */}
    <MenuItem
    icon= {<DashboardIcon/>}
    component={<NavLink/>}
  to="/"
  activeClassName="active"
  // activeclassname="active" 
    > 
    Overview</MenuItem>
    {/* </div> */}

    {/* </NavLink> */}
    <SubMenu 
    label="Audience"
    icon={<PeopleIcon/>}
    >
    
      <MenuItem>line 1</MenuItem>
      <MenuItem> Line 2 </MenuItem>
    </SubMenu>
    {/* <NavLink to= '/new' activeclassname="active"  > */}
    <MenuItem
    
    icon= {<InsightsIcon/>}
    component={<NavLink/>}
    to="/new"
    activeClassName="active"
    // activeclassname="active"  
    >
       Insight 
    </MenuItem>
    {/* </NavLink> */}
    <MenuItem
    icon={<ReportIcon/>}
    >
     Reports </MenuItem>
    
    <MenuItem icon={<NotificationsNoneIcon  />}> Notification </MenuItem>
    
    <MenuItem icon={<SettingsApplicationsIcon/>}> Settings </MenuItem>

  </Menu>   
 </div>
 <div style={{padding:'10px'}}>
               SUPPORT
  </div>
  <div >
  <Menu menuItemStyles={menuItemStyles}>
    
    <MenuItem icon= {<HelpIcon/>}> Help </MenuItem>
    
    <MenuItem icon={<FeedbackIcon/>}> Feedback </MenuItem>
  </Menu>        
  </div>
  
            <div style={{padding:'10px'}}>
                 USER
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

