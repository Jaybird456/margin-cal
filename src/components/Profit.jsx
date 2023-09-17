import React from 'react'
import { useState } from 'react'

function Profit() {
    const [cost, setCost] = useState('');
    const handleCostChange = (e) => {setCost(e.target.value);};
    const [margin, setMargin] = useState('');
    const handleMarginChange = (e) => {setMargin(e.target.value);};

    const getPrice = (cost,margin) =>{ return cost / (1 - (margin / 100)) };
    let price = getPrice(cost,margin);
  return (
    <section className='flex w-auto'> 
        
        <div className='flex-col justify-start'>
        <h1>Calculate What Your Price Should Be</h1>
            <form action="" className='flex flex-col'>
                <label>Enter the margin you want:</label>
                <input type="number" className='focus:outline-0 focus:border-red-600 bg-light-black
                 text-red-600 border-solid border-2 border-black p-1 m-1' value={margin} onChange={handleMarginChange} />
                <label>Enter the cost of your product:</label>
                <input type="number" className='focus:outline-0 focus:border-red-600 bg-light-black
                 text-red-600 border-solid border-2 border-black p-1 m-1' value={cost} onChange={handleCostChange}/>
            </form>
        </div>
        <div className='flex-col p-2 my-9 mx-9 border-2 border-black'>
            <h2>Results:</h2>
            <h3 className='text-red-600'>Price Should Be: $
                {price.toFixed(2)}
            </h3>
        </div>
    </section>
  )
}

export default Profit