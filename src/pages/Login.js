import { useState } from "react";

import axios from "axios";

function Login() {
    
    const [state, setstate] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        setstate({...state, [name] : value});
    }
    
    const submit = async () => { 
        const res = await axios.post('/v2/admin/signin', state);
        console.log(res)

        const { token } = res.data;
        axios.defaults.headers.common['Authorization'] = token;

    }
    
    
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>登入帳號</h2>

                    <div className="alert alert-danger" role="alert">
                        錯誤訊息
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