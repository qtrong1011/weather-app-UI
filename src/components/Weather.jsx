import React, { useState } from 'react'

const Weather = () => {
  const [address,setAddress] = useState('')
  const [message,setMessage] = useState('')
  //Local URL
  // const url = `http://localhost:3001/weather?address=${address}` 
  //Production URL
  const url = `https://luu-weather-app-133e9fd79ea1.herokuapp.com/weather?address=${address}` 

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(url).then((response)=>{
      return response.json()
    }).then((data)=>{
      setMessage(data)
    })
  }
  
  return (
    <div className=' bg-[#9EB384]  md:w-[50%] w-[75%] my-10 p-2 border-1 border-[#9EB384] rounded-3xl'>
      <div className='flex flex-col items-center' >
        <p className='text-4xl text-center'>Weather Forecast</p>  
        <div>
          <form onSubmit={handleSubmit}>
            <input type='text' id='address' name='address' value={address}  placeholder='Enter your city...' className='mx-4 px-2 my-8 rounded-2xl' onChange={(event)=>{
              setAddress(event.target.value)
            }}></input>
            <button type='submit' className='border-[1px] border-[#435334] px-2 tracking-wider rounded-[10px] hover:bg-[#435334]'>Forecast</button>
          </form>
          
        </div>  
      </div>
      <div className='h-[50vh]'>
        
        <p className=''>{message.error ? message.error :message.forecast}</p>
        <p className=''>{message.error ? '' : message.location}</p>
      </div>
      <footer className='border-t-[1px] mt-[16px] font-extralight '>
        This App is created by Jason Luu
      </footer>
      
    </div>
  )
}

export default Weather