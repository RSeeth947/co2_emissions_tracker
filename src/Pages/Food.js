import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';

const Food = () => {

    const [meatCals, setMeatCals] = useState(0)

    const getMeatChange = (event) => {
        setMeatCals(event.target.value)
    }

    const [grainCals, setgrainCals] = useState(0)

    const getGrainChange = (event) => {
        setgrainCals(event.target.value)
    }

    const [vegCals, setvegCals] = useState(0)

    const getVegChange = (event) => {
        setvegCals(event.target.value)
    }

    const [dairyCals, setdairyCals] = useState(0)

    const getDairyChange = (event) => {
        setdairyCals(event.target.value)
    }
    localStorage.setItem("meat_cals", meatCals)
    localStorage.setItem("grain_cals", grainCals)
    localStorage.setItem("veg_cals", vegCals)
    localStorage.setItem("dairy_cals", dairyCals)

    return (
        <div className='type_container'>
            <Link to='/housing'>Enter Housing Info</Link>
            <div className='food_inputs'>
                <div className='meat'>
                    <p>meat</p>
                    <input className='meat-input-field' onChange={getMeatChange} type='number'placeholder='0'></input>
                </div>
                <div className='grains'>
                    <p>grains</p>
                    <input className='grains-input-field' onChange={getGrainChange} type='number'placeholder='0'></input>
                </div>
                <div className='veg'>
                    <p>veg</p>
                    <input className='veg-input-field' onChange={getVegChange} type='number'placeholder='0'></input>
                </div>
                <div className='dairy'>
                    <p>dairy</p>
                    <input className='dairy-input-field' onChange={getDairyChange} type='number'placeholder='0'></input>
                </div>

            </div>
                     
            
           
        </div>
    )
};

export default Food;