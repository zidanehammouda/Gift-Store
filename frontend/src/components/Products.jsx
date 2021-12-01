import React,{useState,useEffect} from 'react'
import "./Products.css"
//const data = require('../assets/dummy_data')
import axios from 'axios'



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
                    <td><button id="edit_button">Edit</button></td>
                    
                    </tr>
                )})}
            </table>
        </div>
    )
}

export default Products
