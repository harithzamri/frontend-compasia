import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Table} from 'reactstrap'

function Order()
{
  const [order, setOrder] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4000/order').then((response) =>
    {
     setOrder(response.data)
   })
  })
  
  return (
    <>
      <Table bordered>
       <thead>
         <tr>
           <th>
             Order Id
           </th>
           <th>
             Product Id
           </th>
           <th>
             Product Brand
           </th>
           <th>
             Product Name
           </th>
           <th>
            Order Status
           </th>
           <th>
            Order Date Time
           </th>
         </tr>
       </thead>
      {order.map((order) => (
       <tbody>
         <tr>
           <th scope="row">
             {order.id}
           </th>
           <td>
             {order.productId}
           </td>
           <td>
             {order.brand}
           </td>
           <td>
             {order.name}
            </td>
            <td>
             {order.order_status}
            </td>
            <td>
             {order.created_at}
           </td>
         </tr>
       </tbody>
      ))}
         </Table>
    </>
  )
}

export default Order