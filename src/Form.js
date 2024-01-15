import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './Redux/user'

function Form() {
         const disptach=useDispatch()
         const [name, setname] = useState('')
         const [email, setemail] = useState('')
  return (
    <div>
        <label>name:</label>
<input   onChange={(e)=>setname(e.target.value)}  />
       <label>email:</label>
<input   onChange={(e)=>setemail(e.target.value)}  />
<button   onClick={()=>disptach(login({Name:name,Email:email}))} >submit</button>
    </div>
  )
}

export default Form