import "./Products.css"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
const data1 = require('../../assets/dummy_data')






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
    

    return (
        <div className="Container">
            { data.length ===0 ? 
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
                
                {data1.map((element)=> {
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
                        <button class="btn"><i class="fa fa-close"></i></button>
                        <button class="btn"><i class="fa fa-edit"></i></button>
                        </div>
                        
                    
                    </td>
                    
                    </tr>
                )})}
            </table> 
            : <h1>You have no product</h1> 
        }
        
        </div>
    )
}

export default Products
