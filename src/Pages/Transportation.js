import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Transportation = () => {

    const [sedanMiles, setSedanMiles] = useState(0)

    const getSedanChange = (event) => {
        setSedanMiles(event.target.value)
    }

    const [suvMiles, setSUVMiles] = useState(0)

    const getSUVChange = (event) => {
        setSUVMiles(event.target.value)
    }

    const [busMiles, setBusMiles] = useState(0)

    const getBusChange = (event) => {
        setBusMiles(event.target.value)
    }

    const [planeMiles, setPlaneMiles] = useState(0)

    const getPlaneChange = (event) => {
        setPlaneMiles(event.target.value)
    }

    localStorage.setItem("sedan_miles", sedanMiles)
    localStorage.setItem("suv_miles", suvMiles)
    localStorage.setItem("bus_miles", busMiles)
    localStorage.setItem("plane_miles", planeMiles)

    return (    
        <div className='type_container'>
            <Link to='/food'>Enter Food Info</Link>
            <div className='transportation_inputs'>

                <div className='sedan'>
                    <p>sedan</p>
                    <input className='sedan-input-field' onChange={getSedanChange} type='number'placeholder='0'></input>
                </div>
                <div className='suv'>
                    <p>suv</p>
                    <input className='suv-input-field' onChange={getSUVChange} type='number'placeholder='0'></input>
                </div>
                <div className='bus'>
                    <p>bus</p>
                    <input className='bus-input-field' onChange={getBusChange} type='number'placeholder='0'></input>
                </div>
                <div className='plane'>
                    <p>plane</p>
                    <input className='plane-input-field' onChange={getPlaneChange} type='number'placeholder='0'></input>
                </div>

            </div>
        </div>
       

    )
    
};

export default Transportation;