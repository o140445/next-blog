'use client'
import Link from 'next/link';
import classes from './login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { lgoin } from '../api/auth';
import HCaptcha from '@hcaptcha/react-hcaptcha';


const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleVerification = (value) => {
        // This function will be called when the user completes the hCaptcha challenge
        // Store the hCaptcha value in the component state
        setCaptchaValue(value);
      };



    const router = useRouter();

    const  handleSubmit = async (e) => {
        e.preventDefault()

        if (captchaValue == null) {
            toast.error("请先验证！")
            setCaptchaValue(null)
            return
        }

        if (password === '' || userName === '') {
            toast.error("账号密码不能为空！")
            setCaptchaValue(null)
            return
        }

        if(password.length < 6) {
            toast.error("秘密不能小于6位数！")
            setCaptchaValue(null)
            return
        }

        try {
            let result: any;
            result = await lgoin({
                user_name: userName, 
                password: password, 
                captcha_value: captchaValue
            });

            if(!result) {
                toast.error("登录失败请稍后再试！")
                return 
            }

            if(result.code != 0) {
                toast.error(result.msg)
                return 
            }

            localStorage.setItem("token", result.data.token);
            document.cookie = `auth=${result.data.token}`;
            toast.success("登录成功！")
            router.push("/");
            
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
                    <HCaptcha
                        sitekey="31b0abcc-1deb-425d-8792-79946ab0ee17" // Replace with your actual hCaptcha site key
                        onVerify={handleVerification}
                    />
                    <button className={classes.subminButton}>登录</button>
                    <Link className={classes.loginNow} href='/register'>还有没有账号? 点击注册</Link>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default Login;