import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center space-y-2'>
        <div className='spinner'></div>
        <h1 className='text-bgDark font-semibold text-lg'>Loading...</h1>
    </div>
  )
}

export default Spinner