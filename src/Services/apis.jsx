const BASE_URL = "http://localhost:7000";

export const userEndpoints = {
    SENDOTP_API : BASE_URL+"/user/sendotp",
    SIGNUP_API : BASE_URL+"/user/signup",
    LOGIN_API : BASE_URL+"/user/login"
}

export const passwordEndpoints = {
    PASSWORDTOKEN_API : BASE_URL + '/password/passwordtoken',
    RESETPASSWORD_API : BASE_URL + '/password/resetpassword'
}

export const resuemEndpoints = {
    ADDRESUME_API : BASE_URL + '/resume/addresume',
    DELETERESUME_API : BASE_URL + '/resume/deleteresume',
    GETALLRESUME_API : BASE_URL + '/resume/getallresume',
}

