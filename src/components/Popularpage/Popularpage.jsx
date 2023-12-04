import React from 'react'
import { useContext } from 'react'
import contextApi from '../../context/contextapi'
import Card from '../card/Card'
import "./popularpage.css"
const Popularpage = () => {
  
    const popularAnimes = useContext(contextApi).popularAnimes
    
  return (
      <div className='popularpage-css' >

      {popularAnimes.map((item,index)=>{
          return <Card key={index} anime = {item}  />
        })}
      
      
     
        </div>


  )
}

export default Popularpage