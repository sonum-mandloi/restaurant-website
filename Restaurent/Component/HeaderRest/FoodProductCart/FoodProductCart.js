import React, { useState } from 'react'
import './FoodProductCart.css'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillStar} from 'react-icons/ai'
import { getAddtoCart } from '../../../Store/SliceRest/AddToCartSlice'

const FoodProductCart = () => {

    const {RestApiStore=[]} = useSelector((state)=>state?.ApiCollected)
    const {catergories=[]} = useSelector((state)=>state?.ApiCollected)
    const {search=[]} = useSelector((state)=>state?.ApiCollected)

    const dispatch =  useDispatch()

    function cartadd(food){
        dispatch(getAddtoCart(food))
    }
  return (
    <>
    <div className='Rest-foodProduct'>
     {
        RestApiStore.filter((food)=>{
            if(catergories === "all"){
                return food.name.toLowerCase().includes(search.toLowerCase())
            }else{
                return catergories === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
        }).map((food,id)=>{
            return(
                <>
                <div key={id} className="Rest-foodProduct-cart">
                    <img
                        src={food.img} alt=""/>
                    <div className="Rest-foodProduct-cartprice">
                        <h2>{food.name}</h2>
                        <span>₹{food.price}</span>
                    </div>
                    <p className="Rest-foodProduct-cartdes">{food.desc.slice(0, 50)}...</p>
                    <div className="Rest-foodProduct-cartrat">
                        <span><AiFillStar className="Rest-foodProduct-cartstar" />{food.rating}</span>
                        <button onClick={()=>cartadd({food,qty:1})}>Add to cart</button>
                    </div>
              </div>
                </>
            )
        })
     }

            {/* {
            RestApiStore.map((food,id)=>{
                return(
                    <>
                    <div key={id} className="Rest-foodProduct-cart">
                        <img
                            src={food.img} alt=""/>
                        <div className="Rest-foodProduct-cartprice">
                            <h2>{food.name}</h2>
                            <span>₹{food.price}</span>
                        </div>
                        <p className="Rest-foodProduct-cartdes">{food.desc.slice(0, 50)}...</p>
                        <div className="Rest-foodProduct-cartrat">
                            <span><AiFillStar className="Rest-foodProduct-cartstar" />{food.rating}</span>
                            <button onClick={()=>cartadd({food,qty:1})}>Add to cart</button>
                        </div>
                  </div>
                    </>
                )
            })
            } */}
    </div>
    </>
  )
}

export default FoodProductCart
