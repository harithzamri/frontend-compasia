import { Button } from 'reactstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Filter({childToParent})
{
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [name, setName] = useState('')
    const handleCategory = (e) =>
    {
        setCategory(e.target.value)
    }

    const handleBrand = e =>
    {
        setBrand(e.target.value)
    }

    const data = {
        name,
        brand,
        category
    }

    const transfer = e =>
    {
        e.preventDefault();
        childToParent(data)
    }


  return (
      <div>
          <form style={{display:'flex', flexDirection: 'column', marginRight: '40px'}}>
              <label>Product Name</label>
              <input placeholder='Product Name' type='text' onChange={e => setName(e.target.value)}/>
              <label>Category</label>
              <select id = "dropdown" value={category} onChange={handleCategory}>
              <option value="tablet">Tablet</option>
              <option value="phone">Phone</option>
             </select>
              <label>Brand</label> 
              <select id = "dropdown" value={brand} onChange={handleBrand}>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Huawei">Huawei</option>
              </select>
              <Button style={{ marginTop: '10px' }} type='onsubmit' onClick={transfer}>Search</Button>
          </form>
      </div>
  )
}

export default Filter