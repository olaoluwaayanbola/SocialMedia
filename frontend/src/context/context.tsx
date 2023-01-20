import {createContext,useContext,useState} from "react"

const MainContext = createContext({})

/**
 * @param MainContextWrappper 
 * -- takes in the children nodes and wraps 
 * 
 */ 

export MainContextWrappper = ({children}) =>{
    const [mobileToggle ,setMobileToogle] = useState<boolean>(true)
    
    return(
        <MainContext.Provider
             values ={{
                mobileToggle,
                setMobileToogle
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

/**
 * @param UseContextValues --returns an object 
 */ 

export UseContextValues = UseContext(MainContext)