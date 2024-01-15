import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const data=useSelector((state)=>state.user)
    console.log(data);
  return (
    <div>
        <h2>email:{data.email}</h2> 
        <h2>name:{data.name}</h2>
    </div>
  )
}

export default Profile