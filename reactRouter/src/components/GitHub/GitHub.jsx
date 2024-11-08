import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function GitHub() {

    const [data , setData] = useState();

    useEffect(() => {
        fetch ('https://api.github.com/users/Alokrai123')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[]
        
    )
  return (
    <div className='text-center bg-green-600 p-6 '>
      GitHub Follower : {data.followers}
      <img src={data.avatar_url} alt="git picture"  width={300} className='text-center'/>
    </div>
  )
}
