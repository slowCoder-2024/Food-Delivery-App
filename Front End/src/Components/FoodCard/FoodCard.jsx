import {useContext} from 'react';
import {assets} from '../../assets/assets';
import './FoodCard.css';
import { StoreContext } from '../../Context/StoreContext/StoreContext';
const FoodCard=({id,name,image,price,description,category})=>{
  
   // calling the useContext hook
   const{cartItems,setCartItems,increaseQty,decreaseQty}=useContext(StoreContext);
  
   return(
      <div className='foodCard'>
         <div className='foodCardImgContainer'>
            <img src={image} alt={name}/>
            {
               !cartItems[id]?
               <img className='initialAddBtn' src={assets.add_icon_white} onClick={()=>increaseQty(id)}/>
               :<div className='decideQty'>
                   <img src={assets.remove_icon_red} onClick={()=>decreaseQty(id)}/>
                   <p>{cartItems[id]}</p>
                   <img src={assets.add_icon_green} onClick={()=>increaseQty(id)}/>
               </div>
            }
         </div>
         <div className='foodCardData'>
            <div className='nameRating'>
              <p>{name}</p>
              <img src={assets.rating_stars}/>
            </div>
            <p className='foodDescription'>{description}</p>
            <h2 className='rate'>&#36;{price}</h2>
         </div>
      </div>
   );
}
export default FoodCard; 