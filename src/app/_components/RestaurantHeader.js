"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const RestaurantHeader = () => {
    const [details, setDetails] = useState();
    const router = useRouter();
    const pathName = usePathname();
    useEffect(() => {
        let data = localStorage.getItem("restoUser");
        if (!data) {
            router.push("/restaurant")
        } else if(data && pathName == '/restaurant'){
            router.push("/restaurant/dashboard")
        }else {
            setDetails(JSON.parse(data))
        }
    },[])
    const logout =()=> {
        localStorage.removeItem("restoUser");
        router.push("/restaurant")
    }
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{ width: 100 }} src="" alt='logo' />
            </div>
            <ul>
                <Link href={"/"}>Home</Link>
                {
                    details && details.name ?
                        <>
                            <li><button onClick={logout}>Logout</button></li>
                            <li><Link href="/">Profile</Link></li>
                        </>
                        : <li><Link href="/">Login/Signup</Link></li>
                }
            </ul>
        </div>
    )
}
export default RestaurantHeader;