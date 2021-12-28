import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import ('./EditProduct.css')

const EditProduct = () => {
    const location = useLocation()
    const {product} = location.state
    const [data,setData] = useState(product)
    const [categories,setCategories] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        const url = 'http://localhost:8000/api/categories'
        axios(url)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)})
    },[]
    )

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
            .catch(error => console.log(error))
            .then(setTimeout(()=>navigate("/"),1000))

    }


    return (
        <div className="MainEditProduct">
          <Link to='/'><BsFillArrowLeftCircleFill id="GoBackButton"/></Link>
            <div className="EditProduct shadow-4">
                <h1>Updating Product</h1>
            
            <form onSubmit={handleSubmit}>

                <div className="EditProductForm">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name ="name" value = { data.name || '' } onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <select name="category" id="categories" onChange={handleChange}>
                    {
                    categories.map((element)=>
                    {
                        if(element.title === data.category) {
                            return <option selected value={element.title}>{element.title}</option>
                        }
                        else {
                            return <option  value={element.title}>{element.title}</option>
                        }
                    }
                    )
                    }
                    
                </select>


                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" name ="quantity" value = { data.quantity || '' } onChange={handleChange}/>

                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name ="brand" value = { data.brand || '' } onChange={handleChange} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" name ="image" value = { data.image || '' } onChange={handleChange} /> 
                </div>

                <div className="Submit-Cancel">
                <MDBBtn type="submit" color='success'>Save</MDBBtn>
                
                <Link to="/"><MDBBtn className='text-dark' color='light'>Cancel</MDBBtn></Link>
                </div>

                
                
            </form>
        </div>
        </div>
    )
}

export default EditProduct
