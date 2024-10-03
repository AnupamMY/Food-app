import { createContext, useState  } from "react"
import {food_list} from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{
    const [cartItems,setItems] = useState({})
    const [login,setLogin ] =useState(false)

    const addItem= (itemId)=>{
       if(!cartItems[itemId]){
        setItems((prev)=>({...prev,[itemId]:1}))
       }
       else{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
    }
    
    const removeItem = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
    
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((products)=>products._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue={
        food_list,
        addItem,
        removeItem,
        cartItems,
        setItems,
        login,
        setLogin,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider