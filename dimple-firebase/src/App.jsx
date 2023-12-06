
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(null)

 const handleGoogleSignIn=()=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
      const loggedUser = result.user;
      setUser(loggedUser)

    })
    .catch(error=>{
      console.log(error)
    })
 }

  return (
    <>
      
      <h1>Firebase + React</h1>
          <button onClick={handleGoogleSignIn}>Google Sign in</button>
      { user && <div className='card'>
          <h4>User: {user.displayName}</h4>
         </div>
      }
    </>
  )
}

export default App
