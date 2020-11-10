import React, {createContext, useContext, useReducer} from 'react'

const StoreContext = createContext()
const initialState = {}
const reducer = (state, action) => {
    switch(action.type){
       
    }
}

export const StoreProvider = ({data}) => {
    const [state, dispatch]= useReducer(reducer, initialState)

    return (
       <StoreContext.Provider value={{state, dispatch}}>
           {data}
       </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)