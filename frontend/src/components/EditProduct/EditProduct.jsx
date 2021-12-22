import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import React,{useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ('./EditProduct.css')

const EditProduct = () => {
    const location = useLocation()
    const {product} = location.state
    const [data,setData] = useState(product)
    const [Updated,setUpdated] = useState(false)


    const handleChange = ({target}) =>{
        const {name,value} = target
        setData( (prevData)=> ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${data.id}`,data)
            .then(response => console.log(response))
            .then(setUpdated(true))
            .catch(error => console.log(error))

    }


    return (
        <div className="Main">
          <Link to='/'><BsFillArrowLeftCircleFill id="GoBackButton"/></Link>
            <div className="AddProduct">
                <h3>{`Updating Product ${data.id}`}</h3>
            
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name ="name" value = { data.name || '' } onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" name ="category" value = { data.category || '' } onChange={handleChange}/>

                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" name ="quantity" value = { data.quantity || '' } onChange={handleChange}/>

                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name ="brand" value = { data.brand || '' } onChange={handleChange} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" name ="image" value = { data.image || '' } onChange={handleChange} /> 

                <div className="Btn">
                <input type="submit" value="Update" />
                <input id="Cancel" type="submit" value="Cancel" />
                </div>
                
            </form>
        </div>
        </div>
    )
}

export default EditProduct
