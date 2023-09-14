import React from 'react'

const References = () => {
  return (
    <div className='bg-[#9EB384]  md:w-[50%] w-[75%] my-10 p-2 border-1 border-[#9EB384] rounded-3xl'>
        <p className='md:text-4xl text-[32px] text-center py-2'>References</p>
        <p className='italic text-[20px]'>For more information, please go to:</p>
        <ol className='list-decimal mx-8 '>
            <li className='font-bold'>MapBox Service: 
                {/* <ul className='list-disc px-4 font-normal'>
                    <li className='w-full'>Used to do forward geocoding &#40; converting specific location into coordinates.&#41; </li>
                </ul> */}
                <a href="https://www.mapbox.com/" alt='MapBox home page' className='px-2 font-normal italic'>https://www.mapbox.com/</a>
            </li>
            <li className='font-bold'>Weather Stack Service:
                {/* <ul className='list-disc px-4 font-normal'>
                    <li>
                        Used to forecast the weather from the coressponding coordinates.
                    </li>
                </ul> */}
                <a href="https://weatherstack.com/" alt='WeatherStack home page' className='px-2 font-normal italic'>https://weatherstack.com/</a>

            </li>
        </ol>

    </div>
  )
}

export default References