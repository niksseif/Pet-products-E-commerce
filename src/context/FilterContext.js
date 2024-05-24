import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList : [],
    inStock: false,
    bestSeller : false,
    sortBy : null,
    rating : null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children })=>{
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload : {
                products : products
            }
        })

    }

    const value = {
        products: state.productList,
        initProductList
    }
    return (
        <FilterContext.Provider value ={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);