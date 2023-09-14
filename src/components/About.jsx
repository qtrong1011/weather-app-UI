import React from 'react'

const About = () => {
  return (
    <div className='bg-[#9EB384]  md:w-[50%] w-[75%] my-10 p-2 border-1 border-[#9EB384] rounded-3xl'>
        <p className='md:text-4xl text-[32px] text-center py-2'>About the Weather App</p>
        <p className='italic text-[20px]'>The weather app is created by using 2 following services:</p>
        <ol className='list-decimal mx-8 '>
            <li className='font-bold'>MapBox Service
                <ul className='list-disc px-4 font-normal'>
                    <li className='w-full'>Used to do forward geocoding &#40; converting specific location into coordinates.&#41; </li>
                </ul>
            </li>
            <li className='font-bold'>Weather Stack Service
                <ul className='list-disc px-4 font-normal'>
                    <li>
                        Used to forecast the weather from the coressponding coordinates.
                    </li>
                </ul>

            </li>
        </ol>

    </div>
  )
}

export default About