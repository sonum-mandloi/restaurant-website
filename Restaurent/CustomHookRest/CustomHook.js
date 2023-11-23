import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { getApi } from '../Store/SliceRest/SliceRest'
import FoodData from './DataRest'

const useCustomHook = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
         function RestApi(){
        //  const respose = await axios.get("https://api.spoonacular.com/food/menuItems/search?query=all&number=50&apiKey=3651bac3a76a49d289bcbedb711e0c7e")
        //  const respose = await axios.get(data)
        //  console.log(FoodData);
        //  dispatch(getApi(respose.data.menuItems))
         dispatch(getApi(FoodData))
        }
        RestApi()
    },[])

  
}
// https://api.spoonacular.com/recipes/convert?ingredientName=flour&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams

export default useCustomHook