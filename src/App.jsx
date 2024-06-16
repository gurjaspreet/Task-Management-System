import React, { useState } from 'react'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasAccount, setHasAccount] = useState(true)

  const login = (event) => {
    event.preventDefault()
    setHasAccount(true)
  }

  const logout = (event) => {
    event.preventDefault()
    setIsLoggedIn(false)
  }

  const toggleHasAccount = (event) => {
    event.preventDefault()
    setHasAccount(prevVal => !prevVal)
  }

  return (
    <div className='app'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} login={login} logout={logout} />
      {isLoggedIn ?
        <Home />:
        hasAccount ? 
          // Remove setIsLoggedIn from Login after login function is implemented
          <LogIn setIsLoggedIn={setIsLoggedIn} toggleHasAccount={toggleHasAccount} /> : 
          <SignUp/>
      }
    </div>
  )
}

export default App
