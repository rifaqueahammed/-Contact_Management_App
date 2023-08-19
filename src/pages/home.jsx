import React  from 'react'

function Home() {
  return (
    <div className='w-full'>
        <div className='w-full h-16 bg-black text-white flex justify-center items-center font-semibold text-xl'>
           <h1>Home</h1>
        </div>
        <div className='p-10 m-2 h-min-screen flex justify-center items-center'>
            <h1 className='text-3xl font-bold'>Welcome to Home Page</h1>
        </div>
    </div>
    )
}

export default Home
