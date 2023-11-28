import Link from "next/link";
import classes from "./footer.module.css"

const Footer = () => {
    return ( 
        <div className={classes.foot}>
            <div className={classes.warpper}>
                <div className={classes.col}>
                    <h2>关于网站</h2>
                    <p>
                        这是一个学习next和react的网站
                    </p>
                </div>

                <div className={classes.col}>
                    <h2>导航</h2>
                    <Link href="/about">关于</Link>
                    <Link href="/category">分类</Link>
                </div>

                <div className={classes.col}>
                    <h2>联系方式</h2>
                    <span>手机号码：xxxxx </span>
                    <span>微信：xxxxx </span>
                    <span>github：xxx </span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;