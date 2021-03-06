import { createSlice } from '@reduxjs/toolkit'
import Sort from '../../components/Sort'

 const initialState = {
 categoryId:0,
 sort:{
    name: 'популярности (DESC)',
    sortProperty: 'rating',
 },
 }
const filterSlise=createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategoryId(state,action){
            state.categoryId=action.payload;
        },
        setSort(state,action){
            state.sort=action.payload;
        }
    }

})


export const { setCategoryId,setSort } = filterSlise.actions

 export default filterSlise.reducer