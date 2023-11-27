import classes from "./blogCard.module.css"
import Link from 'next/link'
import Image from 'next/image'
import React from "react"

const BlogCard = ({ blog: {title, desc, img}}) => {
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
                    </div>
                    <div className={classes.right}>
                        {12} { " " }
                    </div>
                </div>
            </div>
        </div>     
     );
}
 
export default BlogCard