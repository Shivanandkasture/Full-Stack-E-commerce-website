import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export const Header = () => {
    let [nav, setNav] = useState();

    let [searchOpen, setSearchOpen] = useState(true)
    // let [openModal, setOpenModal] = useState(false)
    let searchButton = () => {
        setSearchOpen(!searchOpen)

    }
    // let loginModal = () => {
    //     setOpenModal(!openModal)
    // }

    useEffect(() => {
        document.body.style.overflowX = 'hidden'
    })

    let changeValueOnScroll = () => {
        let scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false)
    }

    window.addEventListener('scroll', changeValueOnScroll)

    let navItems = [

        {
            name: 'electronics',
            // url: '/electronics'
        }, {
            name: 'jewelery',
            // url: '/jewelery'
        },
        {
            name: "men's clothing",
            // url: "/men's clothing",
        }, {
            name: "women's clothing",
            // url: "/women's clothing"
        }
    ]
    return (
        <>
            <header className={`${nav === true ? 'sticky top-0 duration-700 z-[9] bg-purple-600' : ''}  bg-white shadow-md`}>
                <div className='w-full sm:w-[95%]  mx-auto flex items-center justify-between p-3'>

                    <div className="flex items-center justify-center px-2">
                        {/* logo */}
                        <h3 className="p-[10px]">Logo</h3>

                        {/* nav links */}
                        <nav className="hidden md:block ml-[30px]">
                            <ul className="flex items-center justify-center">
                                {
                                    navItems.map((navliks) => <li className="px-[10px] capitalize" key={navliks.name}>{navliks.name} </li>)
                                }
                            </ul>
                        </nav>
                    </div>

                    {/*  */}
                    <div className=" ">
                        <div className="flex items-center justify-center">
                            <div className="p-[10px] hover:bg-purple-500 hover:text-white transition ease-in-out duration-[.5s]" onClick={searchButton}>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div className="p-[10px] hover:bg-purple-500 hover:text-white transition ease-in-out duration-[.5s]" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" >
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>

                            </div>

                            <div className="flex p-[10px] hover:bg-purple-500 hover:text-white transition ease-in-out duration-[.5s] ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  ">
                                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <form className={`absolute top-[100%] ${searchOpen ? 'right-[-110%]' : 'right-0'} w-[95%] sm:w-[450px] flex items-center justify-center  transition-all ease-linear duration-[.4s] `}>
                        <input type="text" placeholder="search for product" className=" outline-none border=[] rounded-md w-full  p-[10px] shadow-md" />

                    </form>

                </div>

            </header>
        </>
    )
}
