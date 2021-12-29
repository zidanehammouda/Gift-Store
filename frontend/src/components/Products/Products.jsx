import "./Products.css"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';






const Products = () => {
    const [data,setData] = useState([])


    const fetchData = async () =>{
        const url = 'http://localhost:8000/api/products'
        await axios(url)
            .then(response => {
                console.log(response.data)
                setData(response.data)})
    }
    
    useEffect(()=>{
        fetchData();
    },[]
    )
    
    const handleClickDelete = async (target)=> {
        await axios.delete(`http://localhost:8000/api/products/${target}`)
            .then(console.log('Succesfuly deleted product'))

            .catch(error => console.log(error))
        fetchData();

    }

    return (
        <div className="MainProducts">
            <div className="Products">
            { 
            data.length !== 0 ? 
            <MDBTable hover>
                <MDBTableHead>
                <tr>
                    <th width="10%">#</th>
                    <th width="20%">Name</th>
                    <th width="20%">Image</th>
                    <th width="10%">Category</th>
                    <th width="10%">Brand</th>
                    <th width="10%">Quantiy</th>
                    <th width="20%">Button</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                
                {data.map((element)=> {
                return (
                   
                   <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td><img style={{textAlign : 'center'}} width ="50px" height ="50px" src={element.image} alt={element.name}/></td>
                    <td>{element.category}</td>
                    <td>{element.brand}</td>
                    <td>{element.quantity}</td>
                    <td>
                        <div className="EditDeleteButtons">
                        <Link to='/edit' state={{product: element}}>
                        <button class="Edit-Delete"><i class="fa fa-edit"></i></button>   
                        </Link>
                        <button class="Edit-Delete" onClick={() => handleClickDelete(element.id)}><i class="fa fa-close"></i></button>
                        </div>
                    </td>
                    
                    </tr>
        
                )})}
                </MDBTableBody>
                   </MDBTable>
            : <h1 className="NoProducts">You have no product</h1> 
        }
        
        </div>
        </div>
    )
}

export default Products
