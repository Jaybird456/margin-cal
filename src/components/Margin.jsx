import React from 'react'
import { useState } from 'react';


function Margin() {
    const [price, setPrice] = useState('');
    const [cost, setCost] = useState('');

    const handlePriceChange = (e) => {setPrice(e.target.value);};
    const handleCostChange = (e) => {setCost(e.target.value);};

    const getMargin = (price,cost) => {return ((price - cost) / price)*100};
    
    const getProfit = (price,cost) =>{return price - cost;};
    let margin=getMargin(price,cost);
    //console.log(margin);
    let profit = getProfit(price,cost);    

  return (
    <section className='flex w-auto'>
        <div className='flex-col justify-start'>
        <h1>Calculate your Margin and Profit</h1>
            <form action="" className='flex flex-col'>
                <label>Enter the sale price of your product:</label>
                <input type="number" className='focus:outline-0 focus:border-red-600 bg-light-black
                 text-red-600 border-solid border-2 border-black p-1 m-1' value={price} onChange={handlePriceChange} />
                <label>Enter the cost of your product:</label>
                <input type="number" className='focus:outline-0 focus:border-red-600 bg-light-black
                 text-red-600 border-solid border-2 border-black p-1 m-1' value={cost} onChange={handleCostChange}/>
            </form>
        </div>
        <div className='flex-col p-2 my-9 mx-9 border-2 border-black'>
            <h2>Results:</h2>
            <h3 className='text-red-600'>Margin:
                {margin !== margin ? margin=0 : getMargin(price,cost).toFixed(2)}%
            </h3>
            <h3 className=' text-green-500'>Profit:$ 
                {profit.toFixed(2)}
            </h3>
        </div>
    </section>
  )
}

export default Margin