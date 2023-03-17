import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HotelDetails from './pages/HotelDetails'
import Navbar from './pages/Navbar'

const App = () => {
    const [item, setItem] = useState("v2/get-meta-data");

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([]);
        console.log(item)
    },[item])

    return (
        <BrowserRouter>
            <Navbar item={item} setItem={setItem}/>
            <Routes>
                <Route path='/' exact element={<Home data={data} />} />
                <Route path='/hotel/:id' element={<HotelDetails /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App