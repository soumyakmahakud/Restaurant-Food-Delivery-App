import { useState } from "react";

const RestaurantLogin = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)

    const handleLogin = ()=> {
     if(!email || !password) {
        setError(true)
     } else {
        setError(false)
     }
    }
    return (
        <>
            <h3>Login Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter email" className="input-field"
                    value={email} onChange={(e)=> setEmail(e.target.value)} />
                    {
                        error && !email && <span className="input_error">Please enter valid email</span>
                    }
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" className="input-field" 
                    value={password} onChange={(e)=> setPassword(e.target.value)} />
                    {
                        error && !password && <span className="input_error">Please enter valid password</span>
                    }
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}
export default RestaurantLogin;