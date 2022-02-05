import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "./firebase.init"

initializeAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error => {
            setError(error.code)
        })
    }
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
          
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser('')
            }
          });
    } ,[auth])
    return{
        user,
        error,
        handleGoogleSignIn,
        handleSignOut
    }
}

export default useFirebase