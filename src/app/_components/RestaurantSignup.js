
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_password] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')

    const router = useRouter();

    const handleSignup = async () => {
        console.log(email, password, name, city, address, contact);
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({ email, password, name, city, address, contact })
        })
        response = await response.json();
        console.log(response);
        if (response.success) {
            console.log(response);
            const { result } = response
            delete result.password;
            // localStorage.getItem("restaurantUser", JSON.stringify(result));
            localStorage.setItem('restoUser', JSON.stringify(result))
            router.push("/restaurant/dashboard")
        }
    }
    return (
        <>
            <h3>Signup</h3>
            <div>
                <div className="input-wrapper">
                    <input type="email" placeholder="Enter email id" className="input-field"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" className="input-field"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="confirm password" className="input-field"
                        value={c_password} onChange={(e) => setC_password(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="restaurant name" className="input-field"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter city" className="input-field"
                        value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter full address" className="input-field"
                        value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter contact number" className="input-field"
                        value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSignup}>Signup</button>
                </div>
            </div>
        </>
    )
}
export default RestaurantSignup;