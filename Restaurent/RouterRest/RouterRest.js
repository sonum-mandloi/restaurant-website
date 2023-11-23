import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useCustomHook from '../CustomHookRest/CustomHook'
import NavRest from '../Component/HeaderRest/NavRest/NavRest'
import SliderRest from '../Component/HeaderRest/SliderRest/SliderRest'
import FoodProductCart from '../Component/HeaderRest/FoodProductCart/FoodProductCart'
import AddtoFoodRest from '../Component/AddtoFoodRest/AddtoFoodRest'

const RouterRest = () => {
  const[side,setSide]=useState(false);

  function sideBar(){
    setSide(!side)
  }
  console.log(side)
    useCustomHook()

  return (
    <>
    <BrowserRouter>
    <NavRest sideBar={sideBar}/>
    <SliderRest/>
    <AddtoFoodRest side={side} sideBar={sideBar}/>
    <Routes>
        <Route path='/' element={<FoodProductCart/>}/>
        {/* <Route path='/AddtoFoodRest' element={<AddtoFoodRest/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterRest
