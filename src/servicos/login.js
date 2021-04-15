import axios from 'axios'

async function loginGoogle(code) {
    const requestOptions = {
        url: "http://localhost:2000/login/google",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            code: code
        }
    }
    
    const result = await axios(requestOptions)
    return result
}

export { loginGoogle }