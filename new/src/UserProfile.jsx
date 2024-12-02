import React, { useState } from 'react'

function UserProfile() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [name2,setname2]=useState('')
    const [email2,setemail2]=useState('')
    const [password2,setpassword2]=useState('')

  return (
    <div>
        <h1>name:{name}</h1>
        <h1>email:{email}</h1>
        <h1>password:{password}</h1>
    
    <input type="text" placeholder='name' onChange={e=>setname(e.target.value)} />
    <input type="email" placeholder='email' onChange={e=>setemail(e.target.value)} />
    <input type="password" placeholder='password' onChange={e=>setpassword(e.target.value)} />


    <hr />

    <h1>name:{name2}</h1>
        <h1>email:{email2}</h1>
        <h1>password:{password2}</h1>
    
    <input type="text" placeholder='name' onChange={e=>{setname2(e.target.value)
        setemail2('')
        
    }} />
    <input type="email" placeholder='email' onChange={e=>{setemail2(e.target.value)
        setname2('')
    }} />
    <input type="password" placeholder='password' onChange={e=>setpassword2(e.target.value)} />
    
    
    </div>
  )
}

export default UserProfile


            