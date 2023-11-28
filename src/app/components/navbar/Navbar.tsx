'use client'
import Link from "next/link";
import Image from "next/image";
import React , {useState} from "react";
import classes from "./navbar.module.css"
import person from "../../../../public/image/ person.jpeg"
import {AiOutlineClose} from "react-icons/ai"
import { useRouter } from 'next/navigation'


const Navbar = () => {
    const router = useRouter()
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
                        <Link className={classes.register} href='/article'> 文章 </Link>
                        <Link className={classes.register} href='/category'> 分类 </Link>
                        <Link className={classes.register} href='/about'> 关于 </Link>
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
                            <button className={classes.login} onClick={() => router.push('/login')}>登陆</button>
                            <Link className={classes.register} href='/register'> 注册 </Link>
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