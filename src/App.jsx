import { useState } from 'react'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
// import { UserAuth } from './context/AuthContext'

function App() {
  // const [count, setCount] = useState(0)

  return(
    <AuthContextProvider>
      <span>hola desde pp</span>
    </AuthContextProvider>
  )
  // return(
  //   <div>hola</div>
  // )
}

export default App
