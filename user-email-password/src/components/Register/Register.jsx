import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Result } from "postcss";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const[showPassword, setShowPassword] = useState(false)

    const handleRegister= e =>{
        e.preventDefault();
        const name= e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

         //reset error and success
         setRegisterError('');
         setSuccess('');


        if(password.length <6 ){
            setRegisterError('Password should be at least 6 characters or more!')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password should be at least 1 upper case!!!')
            return
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions')
            return
        }

       
        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setSuccess('User created Successfully.')

            //update profile
            updateProfile(result.user, {
                displayName: name,
                photoURL: "https://example.com/jane-q-user/profile.jpg"

            })
            .then(()=> console.log('profile updated'))
            .catch()


            //send verification email.
            sendEmailVerification(result.user)
            .then(()=>{
                alert('Please check your email and verify your account.')
            })
            // .catch()
        })
        .catch(error=> {
            setRegisterError(error.message)
        })
    }
    return (
        <div>
            <div className="mx-auto w-1/2">
            <h2 className='text-3xl my-8'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="border border-gray-300 w-full py-2 px-4" placeholder="Email Address" type="email" required name="email" id="" />
                <br /><br />
                <input className="border border-gray-300 w-full py-2 px-4" placeholder="Your Name" type="text" required name="name" id="" />
                <br /><br />
                <div className="relative">
                <input 
                className="border border-gray-300 w-full py-2 px-4" placeholder="Password" 
                required 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="" />
                <span className="absolute top-3 right-3" onClick={()=> setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
                </div>
                <br />
                <input type="checkbox" name="terms" id="terms" />
                <label className="ml-2 mb-4" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                <br /><br />
                <input className="btn btn-secondary w-full py-2 px-4"  type="submit" value="Register" />
            </form>
            {
                registerError && <p className="text-red-600"> {registerError}</p>
            }
            {
                success && <p className="text-green-600"> {success}</p>
            }
            <p className="mt-2">Already have an account? please <Link to={'/login'}><span className="text-blue-600">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;