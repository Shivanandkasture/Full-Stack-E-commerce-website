import img from '../assets/images/thumbnail-2.jpg'
export const Card = () => {
    return (
        <>
            <div className=' sm:w-full mx-auto border'>

                    {/* product imgae */}

                    <div className=''>
                        <figure className='overflow-hidden'>
                            <img src={img} alt='img'  className='hover:scale-125 duration-700 ease-in-out' />
                        </figure>

                    </div>


            </div>

        </>
    )
}
