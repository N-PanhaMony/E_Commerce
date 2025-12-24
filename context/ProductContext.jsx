'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props){

    const {children} = props

    const [ cart , setCart ] = useState(['this is cart'])

    function handleAddProduct(prod){
        
    }
    function handleDeleteProduct(){

    }

    const value = {
        cart,
        handleAddProduct,
        handleDeleteProduct
    }

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)
