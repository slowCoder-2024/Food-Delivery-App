import React,{useState} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';
const Navbar = () => {
//state to handle active classes in nav bar
let[menu,setMenu]=useState('Home');
  return (
    <nav className='navBar'>
        {/* nav bar logo */}
       <img src={assets.logo} alt='logo image' className='logo'/>
        {/*navigation link*/}
        <ul className='navigationLinks'>
            <li onClick={()=>{setMenu('Home')}} className={menu==='Home'?'active':""} >Home</li>
            <li onClick={()=>{setMenu('Menu')}} className={menu==='Menu'?'active':""} >Menu</li>
            <li onClick={()=>{setMenu('MobileApp')}} className={menu==='MobileApp'?'active':""} >Mobile App</li>
            <li onClick={()=>{setMenu('Contact')}} className={menu==='Contact'?'active':""} >Contact Us</li>
        </ul>
        {/* right side section  */}
        <div className='nav-right'>
            <img src={assets.search_icon} alt='search Icon'/>
            <div className='cartContainer'>
                <img src={assets.basket_icon}/>
                {/* this indiacator div will visible wen the cart have something */}
                <div className='indicator'></div>
            </div>
            <button>Sign In</button> 
        </div>
    </nav>
  )
}

export default Navbar 
