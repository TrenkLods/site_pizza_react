import React from 'react'
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemsBlock from "../components/ItemsBlock/ItemBlock";

import pizzas from '../assets/pizza.json'

import Skeleton from "../components/ItemsBlock/Skeleton";


export const Home = ({ searchValue}) => {

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const [categoryId, setCategoryId] = React.useState(0)
  const [sortTypeId, setSortTypeId] = React.useState({
    name: 'популярности (DESC)',
    sortProperty: 'rating'
  })

  // axis 

  React.useEffect(() => {
 
    setIsLoading(true);
    const sortBy=sortTypeId.sortProperty.replace('-','');
    const order=sortTypeId.sortProperty.includes('-') ? 'asc':'desc';
    const category=categoryId > 0 ? 'category=' + categoryId : '';
    const search =searchValue?'&search='+searchValue :'';
//    sortBy=createdAt&orderBy=desc
    fetch(`https://629224fc9d159855f0865c30.mockapi.io/Items?${search}${category}&soprtBy=${sortBy}&&order=${order} `,)
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
        <Categories categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortType={sortTypeId} onClickSort={(i) => setSortTypeId(i)} />
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