import "./Products.css"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AddButton from "../AddButton/AddButton";






const Products = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:8000/api/products'
        axios(url)
            .then(response => {
                console.log(response.data)
                setData(response.data)})
    },[]
    )
    
    const handleClickDelete = async (target)=> {

        console.log('target.value = ',target)
       await axios.delete(`http://localhost:8000/api/products/${target}`)
            .then(console.log('Succesfuly deleted product'))
            .then(window.location.reload(true))
            .catch(error => console.log(error))

    }

    return (
        <div className="Main">
            <AddButton/>
            <div className="Products">
            { 
            data.length !== 0 ? 
                <table id="products">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Quantiy</th>
                    <th>Button</th>
                </tr>
                
                {data.map((element)=> {
                return (
                   
                   <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td><img width ="50px" height ="50px" src={element.image} alt={element.name}/></td>
                    <td>{element.category}</td>
                    <td>{element.brand}</td>
                    <td>{element.quantity}</td>
                    <td>
                        <div className="EditDeleteButtons">
                        <Link to='/edit' state={{product: element}}>
                        <button class="btn"><i class="fa fa-edit"></i></button>   
                        </Link>
                        <button class="btn" onClick={() => handleClickDelete(element.id)}><i class="fa fa-close"></i></button>
                        </div>
                    
                    </td>
                    
                    </tr>
                )})}
            </table> 
            : <h1>You have no product</h1> 
        }
        
        </div>
        </div>
    )
}

export default Products
