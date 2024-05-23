import { createContext, useContext } from "react"

const filterInitialState = {
    productList : [],
    inStock: false,
    bestSeller : false,
    sortBy : null,
    rating : null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children })=>{
    const value = {
        productList:[]
    }
    return (
        <FilterContext.Provider value ={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);