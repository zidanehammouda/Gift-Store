import { Link } from 'react-router-dom';
import React from 'react'
import('./AddButton.css')


const AddButton = () => {
    return (
        <div className="Button">
            <Link to='/post'><button id="AddButton">Add Product</button></Link>
        </div>
    )
}

export default AddButton
