import classes from "./blogCard.module.css"
import Link from 'next/link'
import Image from 'next/image'
import React from "react"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"

const BlogCard = ({ blog: {title, desc, img}}) => {

    const isLiked = true

    return ( 
        <div className={classes.contaoner}>
            <div className={classes.wrapper}>
                <Link className={classes.imageContainer} href='/'>
                    <Image src={img} width="350" height="350" alt={""} />
                </Link>
                <div className={classes.blogData}>
                    <div className={classes.left}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <span>创建时间: <span> 1分钟前 </span></span>
                    </div>
                    <div className={classes.right}>
                        {12} { " " } {isLiked 
                        ? (<AiFillLike size={20}></AiFillLike>)
                        : (<AiOutlineLike size={20} />)}
                    </div>
                </div>
            </div>
        </div>     
     );
}
 
export default BlogCard