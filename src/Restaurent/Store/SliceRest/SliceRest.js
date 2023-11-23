import { createSlice } from "@reduxjs/toolkit";

const SliceRest = createSlice({
    name:"Resturent",
    initialState:{
        RestApiStore:[],
        catergories:"all",
        search:""
    },
    reducers:{
        getApi(state,action){
            state.RestApiStore = action.payload
        },
        getSearch(state,action){
           state.search = action.payload
        },
        addCatergories(state,action){
            state.catergories = action.payload
        }
        
    }
})

export const{getApi,getSearch,addCatergories}=SliceRest.actions

export default SliceRest.reducer