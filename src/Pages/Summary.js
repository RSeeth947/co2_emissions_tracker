import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';

const Food = () => {

    let water_cost = Number(localStorage.getItem("water_cost"))
    let gas_cost = Number(localStorage.getItem("gas_cost"))
    let electric_cost = Number(localStorage.getItem("electric_cost")) 

    let sedan_miles = Number(localStorage.getItem("sedan_miles"))
    let suv_miles = Number(localStorage.getItem("suv_miles"))
    let bus_miles = Number(localStorage.getItem("bus_miles"))
    let plane_miles = Number(localStorage.getItem("plane_miles"))

    let meat_cals = Number(localStorage.getItem("meat_cals"))
    let grain_cals = Number(localStorage.getItem("grain_cals"))
    let veg_cals = Number(localStorage.getItem("veg_cals"))
    let dairy_cals = Number(localStorage.getItem("dairy_cals"))
    
    let water_emis = (water_cost/(52.19))*328.77
    let gas_emis = (gas_cost/60)*483.14
    let electric_emis = (electric_cost/30)*164.38
    let house_emis = (gas_emis + water_emis + electric_emis)

    let sedan_emis = (sedan_miles*0.7694)
    let suv_emis = (suv_miles*8157)
    let bus_emis = (bus_miles*0.8899)
    let plane_emis = (plane_miles*53.3)
    let transportation_emis = (sedan_emis + suv_emis + bus_emis)*52 + plane_emis

    let meat_emis = (meat_cals)*73
    let grain_emis = (grain_cals)*13.7
    let veg_emis = (veg_cals)*38.4
    let dairy_emis = (dairy_cals)*172.2
    let food_emis  = (meat_emis + grain_emis + veg_emis + dairy_emis)

    let daily_emis = ((house_emis)/30) + ((transportation_emis)/365) + food_emis
    let monthly_emis = house_emis + ((transportation_emis)/12) + ((food_emis)*30)
    let yearly_emis = (house_emis*12) + (transportation_emis) + (food_emis*365)
    let yearly_avg = 28480

    let yearly_food_emi = food_emis * 365;
    let yearly_house_emi = house_emis * 12;

    const data = [
      { name: "Transportation", value: transportation_emis/(yearly_emis)*100, fill: "#7044cb"},
      { name: "Food", value: yearly_food_emi/yearly_emis*100, fill: "#f70063"},
      { name: "Housing", value: yearly_house_emi/yearly_emis*100, fill:"white"},
    ];

    return (
      <div className='type'> 
      <div>Meat{meat_emis}</div>
      <div>Transportation{transportation_emis}</div>
      <div>Housing{house_emis}</div>
        <h1>Different Sources of Transmission</h1>
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
          />
          <Tooltip />
        </PieChart>
      <div>CO2 Transmissions from Transportation{transportation_emis/(yearly_emis)*100}%</div>
      <div>CO2 Transmissions from Food{food_emis*365/(yearly_emis)*100}%</div>
      <div>CO2 Transmissions from Housing{house_emis*12/(yearly_emis)*100}%</div>
      </div>
    )
};

export default Food;