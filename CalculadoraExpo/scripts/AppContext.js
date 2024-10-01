import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [teste, setTeste] = useState('')
    const [detail, setDetail] = useState([])

    return (
        <AppContext.Provider value={{ teste, setTeste, detail, setDetail }}>
            {children}
        </AppContext.Provider>
    )
}