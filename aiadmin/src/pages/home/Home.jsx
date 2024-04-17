import React from 'react'
import SideBar from '@/component/sidebar/SideBar'
import NavBar from '@/component/navbar/NavBar'
import Overview from '@/component/overview/Overview'

export default function Home() {
  return (
    <>
      <NavBar/>
      <SideBar/>
      <Overview/>
      
    </>
  )
}
