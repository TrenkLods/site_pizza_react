import React from 'react'
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemsBlock from "../components/ItemsBlock/ItemBlock";
import { createSlice } from '@reduxjs/toolkit'
import pizzas from '../assets/pizza.json'
import { useDispatch, useSelector } from 'react-redux';

import Skeleton from "../components/ItemsBlock/Skeleton";
import { SearchContext } from '../App';
import {setCategoryId} from '../redux/slises/filterSlise'

export const Home = () => {
const dispatch=useDispatch()
const categoryId =useSelector((state)=>state.filter.categoryId)
const sortTypeId =useSelector((state)=>state.filter.sort.sortProperty)

  const {searchValue} =React.useContext(SearchContext)

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)



  const onChangeCategory=(id)=>{
console.log(id)
dispatch(setCategoryId(id))
  }

  // axis 

  React.useEffect(() => {
 
    setIsLoading(true);
    const sortBy=sortTypeId.replace('-','');
    const order=sortTypeId.includes('-') ? 'asc':'desc';
    const category=categoryId > 0 ? 'category=' + categoryId : '';
    const search =searchValue?'&search='+searchValue :'';
//    sortBy=createdAt&orderBy=desc
    fetch(`https://63891e13a4bb27a7f79940a9.mockapi.io/Items?${search}${category}&soprtBy=${sortBy}&&order=${order} `,)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      });
    window.scrollTo(0, 0);
  }, [categoryId,sortTypeId,searchValue]);
  



  // const skeletons=[[...new Array(6)].map((_, index) => <Skeleton key={index} />)]

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
        <Sort  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
             :items.map((obj) => <ItemsBlock key={obj.id}{...obj}/>) 
        }



      </div>
    </>
  )
}
export default Home;
