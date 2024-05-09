import React, { useState, createContext } from 'react'

// Crear el Context
const TextInputContext = createContext({
  text: '', // Valor inicial del texto
  setText: () => {} // Función vacía inicialmente
})

// Componente Provider
function TextInputProvider ({ children }) {
  const [text, setText] = useState('')
  const value = { text, setText }

  console.log('comparación context ', text)

  return (
    <TextInputContext.Provider value={value}>
      {children}
    </TextInputContext.Provider>
  )
}

export { TextInputProvider, TextInputContext }
