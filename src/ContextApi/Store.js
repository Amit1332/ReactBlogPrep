import { createContext ,useState } from "react"
import { ads, data } from "../data"
export const store = createContext()

function Store(props){
    const [user,setUser]=useState(data)
    const [adsvert,setAdvert]=useState(ads)

    return (
        <>
        <store.Provider value={{user,setUser,adsvert ,setAdvert}}  >
          {props.children}
        </store.Provider>
        
        </>
    )

}

export default Store