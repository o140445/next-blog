'use client'
import Link from 'next/link';
import classes from './login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    const  handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName)
        if (password === '' || userName === '') {
            toast.error("账号密码不能为空！")
            return
        }

        if(password.length < 6) {
            toast.error("秘密不能小于6位数！")
            return
        }

        try {
            router.push('/')
            // toast.error(error.msg)
            // return
        } catch (error) {
            console.log(error.msg)
        }
    }

    return ( 
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h2>登录</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='请输入名称' onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" placeholder='请输入密码' onChange={(e) => setPassword(e.target.value)} />
                    <button className={classes.subminButton}>登录</button>
                    <Link className={classes.loginNow} href='/register'>还有没有账号? 点击注册</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default Login;