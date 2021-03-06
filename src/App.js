import { BrowserRouter, Switch, Routes, Route, Router, Link, NavLink } from "react-router-dom";
import './scss/app.scss'
import Header from "./components/Header";
import React from 'react'
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart'

export const SearchContext = React.createContext();

function App() {
  
 
  const[searchValue,setSearchValue]=React.useState();
 


 //console.log(searchValue)
  return (

    <div className="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
        <Header />
      
      <div className="content">
        <div className="container">
          
          <Routes>
            <Route path="/" element={<Home  searchValue={searchValue} />}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
       
        </div>
      </div>
      </SearchContext.Provider>
      
    </div>





  );
}

export default App;
