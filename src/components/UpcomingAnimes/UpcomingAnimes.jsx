import React from 'react'
import { useContext } from 'react'
import contextApi from '../../context/contextapi'
import './upcomingAnimes.css'
import Card from '../card/Card'
const UpcomingAnimes = () => {
    const upcomingAnimes = useContext(contextApi).upcomingAnimes
    
  return (
    <div className='upcomingAnimes-css' >

  {upcomingAnimes.map((item,index)=>{
    return <Card  key={index} anime={item} />
  })}

    </div>
  )
}

export default UpcomingAnimes