import React from 'react'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="flex bg-gray-800">
      <Sidebar/>
      <div className="flex-1">Main Content</div>
    </div>
  )
}

export default Home
