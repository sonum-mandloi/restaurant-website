import React, { useEffect, useState } from 'react'
import './SliderRest.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCatergories, getSearch } from '../../../Store/SliceRest/SliceRest';

const SliderRest = () => {
  const dispatch = useDispatch()
  const {RestApiStore=[]}=useSelector((state)=>state.ApiCollected)
  const {catergories=[]} = useSelector((state)=>state?.ApiCollected)


// console.log('category',catergories);
  // function setcategory(){
    // const categoryfilter = [...new Set( RestApiStore.map((food)=> food.category))]
    // setCategory(categoryfilter)
    // console.log("categoryfilter",categoryfilter);
  // }
  // useEffect(()=>{
    // setcategory()
  // },[])


  return (
   <>
   <div className='SliderRest-rest'>
    <img src="https://www.estudioroxo.com.br/wp-content/uploads/banner-blog-estudio-roxo-ifood.jpg" alt="" />
    <input type="search" placeholder='Search' onChange={(e)=>dispatch(getSearch(e.target.value))}/>
    <nav>
   
            <ul>
        <li onClick={()=>dispatch(addCatergories("all"))} className={catergories === 'all' ? "SliderRest-rest-active": ""} >All</li>
        {
          [...new Set( RestApiStore.map((food)=> food.category))].map((food)=>{
            return(
              <li onClick={()=>dispatch(addCatergories(food))} className={catergories === food ? "SliderRest-rest-active": ""}>{food}</li>
            )
          })
        }
      </ul>
    </nav>
   </div>
   </>
  )
}

export default SliderRest
