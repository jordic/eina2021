
import {createContext} from "react"
import {useContext} from "react"

export const AppContext = createContext({})

export function AppProvider({ children, ...props }) {
  return (
    <AppContext.Provider value={props}>
      {children}
    </AppContext.Provider>
  )
}


export function useApp() {
  return useContext(AppContext)
}
