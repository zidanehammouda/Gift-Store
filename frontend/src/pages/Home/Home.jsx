import React from 'react'
import AddButton from '../../components/AddButton/AddButton.jsx'
import Products from '../../components/Products/Products'
import ('./Home.css')


const Home = () => {
    return (
        <div className="Home">
            <div className="AddButtonHome"><AddButton/></div>
            <Products/> 
        </div>
    )
}

export default Home
