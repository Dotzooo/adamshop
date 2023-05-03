import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    
    const [state, setstate] = useState({
        username: '',
        password: '',
    });

    const [ loginMsg, setLoginMsg] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setstate({...state, [name] : value});
    }
    
    const submit = async () => {
        try {
            const res = await axios.post('/v2/admin/signin', state);
    
            const { token, expired } = res.data;
            // axios.defaults.headers.common['Authorization'] = token;
    
            // 儲存 token
            document.cookie = `token=${token}; expires=${new Date(expired)}`
    
            if (res.data.success) {
                navigate('/admin/products')
            }
            
        } catch (error) {
            setLoginMsg(error.response.data.message)
            // console.log(error.response.data.message)
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>登入帳號</h2>

                    <div className={`alert alert-danger ${loginMsg ? 'd-block' : 'd-none'}`} role="alert">
                        {loginMsg}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label w-100">
                            Email
                            <input id="email" className="form-control" name="username" type="email" placeholder="Email Address" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label w-100">
                            密碼
                            <input type="password" className="form-control" name="password" id="password" placeholder="name@example.com" onChange={handleChange}  />
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submit}>登入</button>
                </div>
            </div>
        </div>
    )
}

export default Login;