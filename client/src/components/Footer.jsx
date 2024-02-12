import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className='w-full bg-purple-50'>

                <div className='w-[90%] mx-auto  mt-2 grid grid-cols-2 md:grid-cols-4 gap-2'>

                    {/* shop section */}

                    <div className=' p-3'>
                        <h2 className='uppercase font-bold font-serif'>shop</h2>
                        <ul>
                            <li className='py-1 capitalize'>Electronics</li>
                            <li className='py-1 capitalize'>Electronics</li>
                            <li className='py-1 capitalize'>Electronics</li>
                            <li className='py-1 capitalize'>Electronics</li>

                        </ul>
                    </div>

                {/* information */}
                    <div className='p-3'>
                        <h2 className='uppercase font-bold font-serif'>shop</h2>
                        <ul>
                            <li className='py-1 capitalize'>about us</li>
                            <li className='py-1 capitalize'>returns policy</li>
                            <li className='py-1 capitalize'>terms & conditions</li>
                            <li className='py-1 capitalize'>privacy policy</li>

                        </ul>
                    </div>

                    <div className='p-3'>
                        <h2 className='uppercase font-bold font-serif'>shop</h2>
                        <ul>
                            <li className='py-1 capitalize'>about us</li>
                            <li className='py-1 capitalize'>returns policy</li>
                            <li className='py-1 capitalize'>terms & conditions</li>
                            <li className='py-1 capitalize'>privacy policy</li>

                        </ul>
                    </div>

                    {/* customer service */}
                    <div className='p-3'>
                        <h2 className='uppercase font-bold font-serif'>shop</h2>
                        <ul>
                            <li className='py-1'>contact us</li>
                            <li className='py-1'>FAQs</li>
                            <li className='py-1'>terms & conditions</li>
                            <li className='py-1'>privacy policy</li>

                        </ul>
                    </div>

                    {/*  help & contacts*/}

                </div>

            </div>
        </>
    )
}
