import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import ('./NewTask.css')


const NewTask = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({})
    const [categories,setCategories] = useState([])
    
    
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
        CheckInput(data)
        
        
    }

    const CheckInput = () => {
        if ( data.name === undefined || data.name==='' || 
            data.category === undefined || data.category === '' ||
            data.quantity === undefined || data.quantity === 0 ||
            data.brand === undefined || data.brand === '' || 
            data.image === undefined || data.image === ''
            )
            {return true}

        else {return false}

    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8000/api/products',data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(setTimeout(()=>navigate("/"),1000))
    }


    return (
        <div className="MainAddProduct">
            <Link to='/'><BsFillArrowLeftCircleFill id="GoBackButton"/></Link>
            <div className="AddProduct shadow-4 ">
            <h1 className="AddProductTitle">Add new product: </h1>
            
            
            <form onSubmit={handleSubmit}>
        
                <div className="AddProductForm">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name ="name" value = { data.name || '' } onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <select name="category" id="categories" onChange={handleChange}>
                    <option></option>
                    {
                    categories.map((element)=>
                    {
                        return(<option value={element.title}>{element.title}</option>)
                        
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

                
                <MDBBtn disabled={CheckInput()} type="submit" value="Submit" color='success'>Save</MDBBtn>
                
                
            </form>
            </div> 
        </div>
    )
}

export default NewTask
