// context
// pass
// provider
// and
// consumer(usecontext)

import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const userData  = {
        name :"bhavesh",
        age :"22"
    }
    return <AppContext.Provider value={userData}>
        {children}
    </AppContext.Provider>
}

export {AppProvider, AppContext}