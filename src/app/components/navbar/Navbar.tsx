'use client'
import Link from "next/link";
import Image from "next/image";
import React , {useState} from "react";
import classes from "./navbar.module.css"
import person from "../../../../public/image/ person.jpeg"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    const loggedIn = false
    const [showDropdown, setShowDropdown] = useState(false)
    const handleShowDropdown = () => setShowDropdown(prev => true)
    const handleHideDropdown = () => setShowDropdown(prev => false)
    
    return ( 
        <div>
            <div className={classes.container}>
                <div className={classes.wapper}>
                    <h2 className={classes.left}>
                        <Link href="/"> WebBlog</Link>
                    </h2>
                    <ul className={classes.right}>
                        {
                        loggedIn 
                        ? (
                            <div>
                               <Image onClick={handleShowDropdown} src={person} width='45' height='45' alt={""} />
                               {showDropdown && (
                                <div className={classes.dropdown}>
                                    <AiOutlineClose className={classes.closeIcon} onClick={handleHideDropdown} ></AiOutlineClose>
                                    <button onClick={handleHideDropdown} className={classes.logout}> Logout</button>
                                    <Link onClick={handleHideDropdown} href='/create-post' className={classes.create}>create</Link>
                                </div>
                               )}
                            </div>
                        ) 
                        : (
                            <>
                            <button className={classes.login}>Log in</button>
                            <Link className={classes.register} href='/register'> Register </Link>
                            </>
                        ) 
                        }
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;