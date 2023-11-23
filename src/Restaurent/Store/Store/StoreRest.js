

import {configureStore} from "@reduxjs/toolkit"
import SliceRest from "../SliceRest/SliceRest"
import SliceAddRest from '../SliceRest/AddToCartSlice'

const Store = configureStore({
reducer:{
  ApiCollected:SliceRest,
  AddCartRest:SliceAddRest
}

})

export default Store