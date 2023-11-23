import React, { useState } from 'react'
import './AddtoFoodRest.css'
import {IoMdClose} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDecrement, getIncrement, getRemoveCart } from '../../Store/SliceRest/AddToCartSlice'

const AddtoFoodRest = ({side,sideBar}) => {
  const dispatch = useDispatch()
  const {addtoCartList=[]}=useSelector((state)=>state.AddCartRest)
  // console.log(addtoCartList);
  const totalItem = addtoCartList.reduce((total,item)=>total + item.qty,0)
  const totalPrice = addtoCartList.reduce((total,item)=>total + item.qty * item.food.price,0)

  return (
    <>
    <div className={side? 'addtocart-rest-block':'addtocart-rest-none'}>
    <div className='addtocart-rest-cart'>

        <div className='addtocart-rest-order'>
          <h2>My Order</h2>
          <IoMdClose className='addtocart-rest-close' onClick={sideBar}/>
        </div>
          {
            addtoCartList.length > 0?
            addtoCartList.map((item)=>{
              return(
                <>
                     <div key={item?.food.id} className='addtocart-rest-smallcart'>
                    <img src={item?.food.img} alt="" />
                    <div className='addtocart-rest-addcart'>
                      <div className='addtocart-rest-addcart-name'>
                          <h3>{item?.food.name}</h3>
                          {/* <MdDelete className='addtocart-rest-delete' onClick={()=>remove(item?.food.id)}/> */}
                          <MdDelete className='addtocart-rest-delete' onClick={()=> dispatch(getRemoveCart(item?.food.id))}/>
                      </div>
                      <div className='addtocart-rest-addcart-price'>
                          <h3>{item?.food.price}</h3>
                          <div className='addtocart-rest-addcart-priceqty'>
                           {/* <Button onClick={()=>increment(item?.food.id)}><AiOutlinePlus className='addtocart-rest-plus'/></Button> */}
                           <Button onClick={()=>item.qty >= 1 ? dispatch(getIncrement(item?.food.id)): (item.qty = 0)}><AiOutlinePlus className='addtocart-rest-plus'/></Button>
                            <h3>{item.qty}</h3>
                           <Button onClick={()=>item.qty > 1 ? dispatch(getDecrement(item?.food.id)): (item.qty)}><AiOutlineMinus className='addtocart-rest-minus'/></Button>
                           {/* <Button onClick={()=>decrement(item?.food.id)} ><AiOutlineMinus  className='addtocart-rest-minus'/></Button> */}
                          </div>
                      </div>
                    </div>
                </div>
                    </>
                  )
            }): <h3>Cart is Empty</h3>
          }

        <div className='addtocart-rest-amount'>
          <h3>Items : {totalItem}</h3>
          <h3>Total Amount : {totalPrice}</h3>
          <Button>Checkout</Button>
        
          </div>
    </div>
    </div>
    </>
  )
}

export default AddtoFoodRest
