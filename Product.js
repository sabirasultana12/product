import React from 'react'
import "./style.css"

const Product=()=>{
    
        const std=[
        {id:101,name:"Smart Watch",price:3000,address:"Delhi",date:"12-04-2025"},
        {id:102,name:"Laptop",price:60000,address:"Lucknow",date:"20-04-2025"},
        {id:103,name:"Tablet",price:25000,address:"Ahmedabad",date:"10-06-2025"},
        {id:104,name:"Smart Phone",price:35000,address:"Mumbai",date:"26-07-2025"},

        ]

    

    return(
        <div className="container">
            <h1 className="heading">PRODUCT DETAILS</h1>
            <table border='1' className="table">
                <thead className="thead">
                    <tr>

                        <th>PRODUCT ID</th>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT PRICE</th>
                        <th>DELIVERY ADDRESS</th>
                        <th>DELIVERY DATE</th>

                    </tr>
                </thead>
                <tbody className="tbody">

                    {std.map(std=>(
                        <tr key={std.id}>
                            <td>{std.id}</td>
                            <td>{std.name}</td>
                            <td>{std.price}</td>
                            <td>{std.address}</td>
                            <td>{std.date}</td>
                            

                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )

    
}

export default Product