import React from 'react'

export const Filter = () => {
    return (
        <>
            <div className='w-full border h-full'>
                <h2 className='text-xl font-bold pl-5 py-2'>Filter</h2>

                {/* category by filter */}

                <div className='w-[95%] px-4 mx-auto '>
                    <h2 className='uppercase font-bold font-serif'>category</h2>
                    <ul>
                        <li className='py-1'>Electronics</li>
                        <li className='py-1'>Electronics</li>
                        <li className='py-1'>Electronics</li>
                        <li className='py-1'>Electronics</li>
                    </ul>
                </div>
                {/* price by filter */}
                <div className='w-[95%] mx-auto px-4 py-2'>
                    <h2 className='uppercase w-full font-bold font-serif '>price</h2>

                    <div className='w-full flex gap-2'>
                        <span>0</span>
                        <input type='range' className='w-full' />
                        <span>100</span>
                    </div>
                </div>


            </div>
        </>
    )
}
