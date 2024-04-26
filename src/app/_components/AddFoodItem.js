import React, { useState } from 'react'

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false)

  const handleAddFoodItem = async ()=> {
    console.log(name, path, price, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false
    } else {
      setError(false)
    }
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restoUser"));
    if (restaurantData) {
      resto_id = restaurantData._id
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method:"POST",
      body:JSON.stringify({
        name, path, price, description, resto_id
      })
    });
    response = await response.json();
    if (response.success) {
      alert("Food item added")
    } else {
      alert("Food item not added")
    }
  }

  return (
    <div className='container'>
      <h1>Add New Food Item</h1>
      <div className='input-wrapper'>
        <input type="text" placeholder="Enter food name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
        {
          error && !name && <span className="input_error">please enter valid name</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder="Enter price" className="input-field" value={price} onChange={(e) => setPrice(e.target.value)} />
        {
          error && !price && <span className="input_error">please enter valid price</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder="Enter image path" className="input-field" value={path} onChange={(e) => setPath(e.target.value)} />
        {
          error && !path && <span className="input_error">please enter valid path</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type="text" placeholder="Enter description" className="input-field" value={description} onChange={(e) => setDescription(e.target.value)} />
        {
          error && !description && <span className="input_error">please enter valid description</span>
        }
      </div>
      <div className='input-wrapper'>
        <button className='button' onClick={handleAddFoodItem}>Add Food Item</button>
      </div>
    </div>
  )
}

export default AddFoodItem
