import React from "react";
import './NavRest.css'
import { FaShoppingCart } from "react-icons/fa";
import {Button,Nav} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavRest({sideBar}){

  const {addtoCartList=[]}=useSelector((state)=>state.AddCartRest)

  const totalItem = addtoCartList.reduce((total,item)=>total + item.qty,0)

    return(
        <>
           <Nav className="Rest-Header">
               <div className="Rest-Header-logo">
                   <img src="https://tse2.mm.bing.net/th?id=OIP.r4Hi50oE4H7Bhswqj3pbnQHaEy&pid=Api&P=0&h=180" alt="" />
                   <h3>if<span>oo</span>d</h3>
               </div>
               <nav>
                   <ul>
                      <li>Home</li>
                      <li>Menu</li>
                      <li>About</li>
                      <li>Contact</li>
                   </ul>
               </nav>
               <div className="Rest-Header-login">
                            <span>
                                <FaShoppingCart onClick={sideBar} className="Rest-Header-shoppaingCart"  />
                                <p className={totalItem >= 1 ? "Rest-Header-cartani" : "Rest-Header-cartani-none"}>{totalItem}</p>
                            </span>
                   <div>
                          <Button>Login</Button>
                          <Button>Sign in</Button>
                   </div>
               </div>
           </Nav>
        </>
    )
}

export default NavRest