import React from 'react'



function Categories({categoryId,onClickCategory}) {
    const categories= ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  

    return(
    <div className="categories">
      <ul>
      {categories.map((categoryName,i)=>(
        <li key={i}
        onClick={()=>onClickCategory(i)} 
        className={categoryId===i? 'active' : ''}>
        {categoryName}
        </li>

      ))}



        
   

        </ul>
    </div>)
  }
  export default Categories;