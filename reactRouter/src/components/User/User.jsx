import React from 'react'

import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-center p-4 text-3xl bold'>
      User : {userId}
    </div>
  )
}

export default User