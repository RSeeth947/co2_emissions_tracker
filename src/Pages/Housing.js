import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';

const Housing = () => {

    const [waterCost, setWaterCost] = useState(0)

    const getWaterCost = (event) => {
        setWaterCost(event.target.value)
    }

    const [gasCost, setGasCost] = useState(0)

    const getGasCost = (event) => {
        setGasCost(event.target.value)
    }

    const [electricCost, setElectricCost] = useState(0)

    const getElectricCost = (event) => {
        setElectricCost(event.target.value)
    }

    localStorage.setItem("water_cost", waterCost)
    localStorage.setItem("gas_cost", gasCost)
    localStorage.setItem("electric_cost", electricCost)

    return (
        <div className='type_container'>
            <Link to='/summary'>See Summary</Link>
            <div className='housing_inputs'>
                <div className='water'>
                    <p>water</p>
                    <input className='water-input-field' onChange={getWaterCost} type='number'placeholder='0'></input>
                </div>
                <div className='electric'>
                    <p>electric</p>
                    <input className='electric-input-field' onChange={getElectricCost} type='number'placeholder='0'></input>
                </div>
                <div className='gas'>
                    <p>gas</p>
                    <input className='gas-input-field' onChange={getGasCost} type='number'placeholder='0'></input>
                </div>
            </div>


        </div>
    )
};

export default Housing;