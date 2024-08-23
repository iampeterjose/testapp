import React from 'react'

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className='flex justify-center items-center mt-40'>
          <div className='flex flex-col bg-slate-50 w-[350px] h-90 p-5 border-2 shadow-lg rounded-lg'>
            <div>
              <h1 className='text-xl'>Sign in</h1>
            </div>
            <div className='flex flex-col mt-4'>
              <label className='pb-2'>Email: </label>
              <input type="email" className='h-10 border-2 rounded-lg px-4 text-base'/>
              <label className='mt-2 pb-2'>Password: </label>
              <input type="password" className='h-10 border-2 rounded-lg px-4 text-base'/>
              <button className='bg-blue-500 text-white mt-6 h-10 rounded-full'>Login</button>
            </div>
            <div className='flex flex-col mt-4'>
              <a href='#'>Sign up</a>
              <a href='#'>Sign in with Google</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignIn