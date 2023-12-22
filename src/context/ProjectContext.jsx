import { useState } from "react"
import { createContext } from  "react"

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [basketProducts, setBasketProducts] = useState([])

  return <ProjectContext.Provider value={{isCartOpen,setIsCartOpen,basketProducts,setBasketProducts}}>
    {children}
    </ProjectContext.Provider>;
};
