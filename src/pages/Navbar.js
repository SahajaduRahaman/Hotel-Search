import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Hotel.png'
import '../styles/Navbar.css'

const Navbar = ({ item, setItem }) => {


    const handleChange = (e) => {
        setTimeout(() => {
            setItem(`locations/v3/search?q=${e.target.value}`);
        },3000)
    }

    const handleLink = () => {
        setItem("v2/get-meta-data");
    }

    return (
        <div className='navbar'>
            <Link className='icon' to="/" style={{ display: 'flex', alignItems: 'center'}} onClick={handleLink}>
                <img src={Logo} alt="logo" height="40px" />
                Home
            </Link>
            <input type="text" onChange={handleChange} placeholder="Search Hotel....."/>
        </div>
    )
}

export default Navbar