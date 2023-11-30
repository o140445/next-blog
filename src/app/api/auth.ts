import { commonRequest } from "./axios";

export async function lgoin({ user_name, password, captcha_value }) {
    const response = await commonRequest.post("/api/login", {
        user_name,
        password,
        captcha_value
    }, {
        headers:{
            "Content-Type":"application/json",
            "Authorization": undefined
        }
    });
    
    return response.data;
}

export async function register({ userName, email, password, captchaValue }) {
    const response = await commonRequest.post("/api/register", {
        userName,
        email,
        password,
        captchaValue
    }, {
        headers:{
            "Content-Type":"application/json",
            "Authorization": undefined
        }
    });

    return response.data;
}

export async function logout() {
    const response = await commonRequest.get("/api/logout");
    return response.data;
}