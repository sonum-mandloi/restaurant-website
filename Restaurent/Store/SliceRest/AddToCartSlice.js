import { createSlice } from "@reduxjs/toolkit";



const SliceAddRest = createSlice({
    name:"Resturent",
    initialState:{
        addtoCartList:[],
        // qty:1
    },
    reducers:{
        getAddtoCart(state,action){
            const exteradd = state.addtoCartList.find((item)=>item?.food.id === action.payload?.food?.id);
            // console.log(action.payload);
            if(exteradd){
                state.addtoCartList=state.addtoCartList.map((item)=>item?.food.id === action.payload?.food?.id ? {...item,qty:item.qty + 1} : item)
            }else{
            state.addtoCartList.push(action.payload);
            }
        },
        getRemoveCart(state,action){
            state.addtoCartList =  state.addtoCartList.filter((item)=>item?.food?.id !== action.payload)
            //  console.log(state.addtoCartList);
        },
        getIncrement(state,action){
            state.addtoCartList = state.addtoCartList.map((item)=>item?.food.id === action.payload ? {...item,qty:item.qty + 1}:item)
            console.log(action.payload);
        },
        getDecrement(state,action){
            state.addtoCartList = state.addtoCartList.map((item)=>item?.food.id === action.payload ? {...item,qty:item.qty - 1}:item)
        }
    }
})

export const{getAddtoCart,getRemoveCart,getIncrement,getDecrement}= SliceAddRest.actions

export default SliceAddRest.reducer