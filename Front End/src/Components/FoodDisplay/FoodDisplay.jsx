
import { StoreContext } from "../../Context/StoreContext/StoreContext";
import { useContext } from "react";
import FoodCard from "../FoodCard/FoodCard";
import './FoodDisplay.css';
const FoodDisplay=({category})=>{
    //useContext
   const {food_menu}=useContext(StoreContext);
   return(
      <main className='foodDisplayContainer'>
         <h2>Top Dishes Near You.</h2>
         <div className='foodDisplayList'>
             {
                food_menu.map((item)=>{
                    if(category==='All' || category===item.category){
                     console.log(item.category)
                      return<FoodCard id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} categrory={item.category} key={item._id}/>
                    }
                })
             }
         </div>
      </main>
   )
}
export default FoodDisplay;