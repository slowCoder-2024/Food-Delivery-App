import React,{useEffect} from 'react'
import {menu_list} from '../../assets/assets';
import '../ExploreMenu/ExploreMenu.css';  
const ExploreMenu = ({category,setCategory}) => {
  useEffect(()=>{console.log(category)},[category]);
  return (
    <main className='exploreMenuContainer'>
      <h2>Explore Our Menu</h2>
      <p className='exploreMenuText'>Choose from a diverse menu featuring a delectable array of dishes craffed with the finest ingredient and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious mealata a time.</p>
      <div className='exploremenuList'>
        {
            menu_list.map(({id,menu_name,menu_image})=>{
                return(
                    <div onClick={()=>setCategory((prev)=>prev===menu_name?'All':menu_name)} key={id} className='typeOfFood'>
                       <img src={menu_image} alt={menu_name} className={category===menu_name?'menu_active':""}/>
                       <p>{menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr className='divider'/>
    </main>
  )
}

export default ExploreMenu
