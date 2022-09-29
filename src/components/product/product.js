import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './filter'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import Swal from 'sweetalert2'

function Product()
{
    const [product, setProduct] = useState([])
    const [data, setData] = useState({})
     useEffect(() => {
     axios.get('http://localhost:4000/product', {
         params: {
             name: data.name,
             category: data.category,
             brand: data.brand
        }
     }).then((response) =>
{
  setProduct(response.data)
})
 }, [data])
    
    
    const childToParent = (childData) =>
    {
     setData(childData)
    }


    const placeOrder = (name, productId, brand, order_status) =>
    {
        axios.post('http://localhost:4000/order', {
            productId,
            brand,
            name,
            order_status: "completed"
        }).then(
            Swal.fire('Succes place order')
        )  
    }
    
  return (
      <div style={{display: 'flex', justifyContent: 'flex-start', margin: '20px'}}>
          <div><Filter childToParent={childToParent}/></div>
          <div style={{display: 'flex', margin: '10px'}}>
              {product.map((product) => (
                  <Card
                      key={product.id}
                            style={{
                            width: '18rem',
                            margin: '1rem'
                            }}
                          >
                            <img
                              alt="Sample"
                              src={product.image}
                            />
                            <CardBody>
                              <CardTitle tag="h5">
                                {product.name}({product.color})
                              </CardTitle>
                              <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                              >
                                RM{product.price}
                          </CardSubtitle>
                          <Button onClick={placeOrder.bind(this,product.name,product.id, product.brand,product.order_status)}>Place Order</Button>
                            </CardBody>
                          </Card>
              ))}
          </div>
      </div>
  )
}

export default Product