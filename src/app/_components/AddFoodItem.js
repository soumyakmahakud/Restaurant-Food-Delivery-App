import React from 'react'

const AddFoodItem = () => {
  return (
    <div className='container'>
      <h1>Add New Food Item</h1>
      <div className='input_wrapper'>
      <input type="text" placeholder="Enter food name" className="input-field" />
      </div>
    </div>
  )
}

export default AddFoodItem
