import { useState } from 'react'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import { MyRoutes } from './routers/routes'
// import { UserAuth } from './context/AuthContext'

function App() {
  // const [count, setCount] = useState(0)

  return(
    <AuthContextProvider>
      <MyRoutes/>
    </AuthContextProvider>
  )
  // return(
  //   <div>hola</div>
  // )
}

export default App
