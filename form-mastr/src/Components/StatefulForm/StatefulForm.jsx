import { useState } from "react";

const StatefulForm = () => {
    const[name, setName] =useState('Ami Aci')
    const[email, setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit=e=>{
        e.preventDefault();
        if(password.length<5){
            setError('password must be 6 character or longer')
        }
        else{
            setError('')
            console.log(email, name, password)
        }
    }
    
    const handleEmail=e=>{
        setEmail(e.target.value)
     }
    const handleName=e=>{
        setName(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
   

    return (
       
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleName}
                type="text" name="name"/>
                <br />
                <input onChange={handleEmail}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePassword}
                type="password" name="password" id="" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;