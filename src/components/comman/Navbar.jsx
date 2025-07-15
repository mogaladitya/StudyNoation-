import React, { useEffect, useState } from 'react'
import { Link, matchPath, matchRoutes, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProfileDropdown from '../core/Auth/ProfileDropdown'
import { apiConnector } from '../../Services/apiconnector'
import { categories } from '../../Services/apis'
import {IoIosArrowDown} from 'react-icons/io'

// const sublinks = [
//     {
//         title: "python",
//         link: "/catalog/python",
//     },
//     {
//         title: "web dev",
//         link: "/catalog/web-devolpment",
//     },
//     {
//         title: "web dev",
//         link: "/catalog/web-devolpment",
//     },
//     {
//         title: "web dev",
//         link: "/catalog/web-devolpment",
//     },
//     {
//         title: "web dev",
//         link: "/catalog/web-devolpment",
//     },
// ]

const Navbar = () => {

    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart );

    const location = useLocation();

    const [sublinks, setSubLinks] = useState([]);

    const fetchSubLink = async() => {
        try {
            const result = apiConnector("GET", categories.CATEGORIES_API) ;
            console.log(result)
            setSubLinks(result.data.data) ; 
        } catch (error) {
            console.log("error while fetching the data")
        }
    }


    useEffect( () => {
        fetchSubLink(); 
    },[]) 


    const matchRoute = (route) => {
        return matchPath(location.pathname, route) ;
    }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            
            <Link to={"/"}>
                <img src={logo} width={160} height={42} loading='lazy' ></img>
            </Link>

            {/* start */}

            <nav> 
                <ul className='hidden md:flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link, index) => {
                           return <li key={index}>
                                {
                                    link.title === "Catalog" ? 
                                    (
                                        <div className='relative flex items-center gap-1 group'>
                                            <p>
                                                {link.title}
                                            </p>
                                            <IoIosArrowDown/>

                                            {/* this div for white rectangle meny bg */}
                                            <div className={`invisible absolute left-[50%] 
                                                translate-x-[-50.5%] 
                                                  translate-y-[10%]  
                                                top-[50%] z-50 
                                                flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                                opacity-0 transition-all duration-200 group-hover:visible
                                                group-hover:opacity-100 lg:w-[300px]`}>

                                                <div className='absolute left-[50%] top-0
                                                    translate-x-[80%]
                                                    translate-y-[-47%] 
                                                    h-6 w-6 rotate-45 rounded bg-richblack-5'>

                                                </div>
                                                {
                                                        sublinks.length > 0 ? (
                                                            sublinks.map((sublink , index) => {
                                                               return <Link className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50' to={sublink.link}>
                                                                    <p>{sublink.title}</p>
                                                                </Link>
                                                            })    
                                                        ) : (
                                                            <div>
                                                            </div>
                                                        ) 
                                                    }



                                            </div>

                                        </div>
                                    )
                                    
                                    :  

                                     (
                                        <Link to={link?.path}>
                                            {
                                                <p className={`${matchRoute(link?.path) ? "text-yellow-25": "text-richblack-25"}`}>
                                                    {link.title}
                                                </p>
                                            }
                                        </Link>
                                    )
                                }
                            </li>
                        })
                    }
                </ul>
            </nav>

                {/* end */}

            
                    
            <nav>

                {/* login sigup dasboard */}

                <div className='flex gapx-4 items-center gap-2'>
                    {

                        user && user.accoutType != "Instructor" && (
                            <Link to="/dashboard/cart" className="relative">
                                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                {
                                    totalItems > 0 && 
                                    (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                                
                            </Link>
                        )

                    }

                   {
                         token == null && (
                            <Link to="/login"> 
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md hover:bg-richblack-900 duration-200'>
                                    Login
                                </button>
                            </Link>
                        )           
                    }
                    {
                        token == null && (
                            <Link to="/signup"> 
                                <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md  hover:bg-richblack-900 duration-200'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    } 
                    {
                        token !== null && <ProfileDropdown />
                    }

                              
                </div>


                                                   
            </nav>

        </div>
    </div>
  )
}

export default Navbar