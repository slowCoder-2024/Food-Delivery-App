import {food_list} from '../../assets/assets';
import {createContext,useState,useEffect} from 'react';

const StoreContext=createContext(null);

const StoreProvider=({children})=>{
    
    const [cartItems,setCartItems]=useState({});

  //function to increase the quantity
   const increaseQty=(selectedItem)=>{
   
      setCartItems((prev)=>({
        ...prev,
        [selectedItem]:prev[selectedItem]?prev[selectedItem]+1:1
       }))
   }

    const decreaseQty=(selectedItem)=>{
        setCartItems((prev)=>{
            const updatedCartItems={...prev};
            if(updatedCartItems[selectedItem]){
                updatedCartItems[selectedItem]-=1;
            }
            if(updatedCartItems[selectedItem]===0){
                delete updatedCartItems[selectedItem];
            }

            return updatedCartItems;
        })
    }
   useEffect(()=>{console.log(cartItems)},[cartItems]);
    return(
        <StoreContext.Provider value={
            {
                food_menu:food_list,
                cartItems:cartItems,
                setCartItems:setCartItems,
                increaseQty:increaseQty,
                decreaseQty:decreaseQty,
            }
            }>
            {children}
        </StoreContext.Provider>
    );
}
export {StoreContext,StoreProvider};