import { createContext, useState, useContext } from 'react'

const CategoryContext = createContext()

export const useCategory = () => {
  return useContext(CategoryContext)
}

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
