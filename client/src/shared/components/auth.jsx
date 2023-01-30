import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHECK_TOKEN } from '../../constant/constant'
import { apiGet } from '../../services/services'

const Auth = () => {
    const nav = useNavigate()
    const checkToken =async ()=>{
        try{
            const {data} = await apiGet(CHECK_TOKEN)
            console.log(data)
          
        }catch(err){
            console.log(err.response)
                alert('Token invalid')
                nav('/login')
            }
        
    }
    useEffect(()=>{
        checkToken()
    },[])

  return (
    <></>
  )
}

export default Auth