import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/context'

const Logout = () => {
    const nav = useNavigate()
    const {logout} = useContext(AppContext)
    useEffect(()=>{
        logout()
        nav('/login')
    },[])
  return (
  <></>
  )
}

export default Logout