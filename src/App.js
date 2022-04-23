import React, {useEffect, useState} from 'react'
import Home from './Home'
import styled from 'styled-components'
import {getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth' 
import {provider} from './firebase'
const App = () => {
  /* Setting the user to null. */
  const [user, setUser] = useState(null)
  const auth = getAuth()

 /* A hook that is listening for changes in the authentication state. */
  useEffect(() => {
    onAuthStateChanged(auth, userSession => {
     if(userSession){
       setUser({
        name: userSession.displayName,
        email: userSession.email,
        avatar: userSession.photoURL,
       })} else{ 
         setUser(null)
      }
    })

  },[ auth ])

  /**
   * It takes the user's login information and sets the user's name, email, and avatar to the state
   */
  const handleUserLogin = async () => {
    const login = await signInWithPopup(auth, provider)

    setUser({
      name: login.user.displayName,
      email: login.user.email,
      avatar: login.user.photoURL,
    })
  }
  /* Rendering the Home component if the user is logged in, and if the user is not logged in, it is
  rendering the SignInContainer component. */
  return (
    <Wrapper>
      {
        user ? ( <Home user={user} setUser={setUser} /> ) : (
          <SignInContainer>
            <Title>Sign In to Continue</Title>
          <SignInButton onClick={handleUserLogin}>
            Log in with Google
          </SignInButton>
          </SignInContainer>
        )
      }
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div` 
  display: flex;
  background-color: #282a37;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;	
  display: flex;
  align-items: center;
  justify-content: center;
`

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;

`

const SignInButton = styled.button`
  background-color: #1c91f4;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: 700;

  &:hover {
    cursor:pointer;
  }
`
