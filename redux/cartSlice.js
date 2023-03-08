import { createSlice } from "@reduxjs/toolkit";
import { priceWithDiscount } from "../utils/currencyHelpers";

const initialState = {products : [],totalPrice:0,totalDiscount:0};
const cartSlice = createSlice({
    name:'cart',
    initialState ,

    reducers:{
      addToCart (state,action){
        const product = action.payload;
        
        const existingProduct = state.products.find(x=>x.id== product.id);
        if(existingProduct){
          existingProduct.quantity+=1
          state.totalPrice+=priceWithDiscount(existingProduct.price,existingProduct.discount)
          if(existingProduct.discount){
            const discountPrice = (existingProduct.price * existingProduct.discount)/100
            state.totalDiscount+=discountPrice
          }
        }else{
          const productToAdd = {
            id:product.id,
            quantity : 1,
            title:product.title,
            price:product.price,
            discount:product.discount,
            thumbnail:product.thumbnail
          }
          state.products.push(productToAdd)
          state.totalPrice+=priceWithDiscount(productToAdd.price,productToAdd.discount)
          if(productToAdd.discount){
            const discountPrice = (product.price * product.discount)/100
            state.totalDiscount+=discountPrice
          }
        }
       
       
       
      },
      deleteFromCart(state,action){
        const product = action.payload;
        const productToDelete = state.products.find(x=>x.id == product.id)
       
        productToDelete.quantity-=1
        if(productToDelete.quantity < 1){
          state.products= state.products.filter(x=>x.id !==productToDelete.id)
        }
        state.totalPrice-=priceWithDiscount(productToDelete.price,productToDelete.discount)
        if(productToDelete.discount){
          const discountPrice = (productToDelete.price * productToDelete.discount)/100
          state.totalDiscount-=discountPrice
        }
       
      },
      deleteAllCart(state){
          state.products = [];
          state.totalDiscount =0;
          state.totalPrice = 0;
      }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;