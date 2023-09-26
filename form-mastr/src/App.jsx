import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
//     const handleSignUpSubmit=data=>{
//     console.log('SignUp Data:', data)
// }
//   const handleUpdateProfile=data=>{
//     console.log('Update profile:', data)
// }
  return (
    <>
      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReusableForm 
      handleSubmit={handleSignUpSubmit}
      formTitle={'SignUp'}>
        <div>
          <h2>SignUp</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      handleSubmit={handleUpdateProfile}
      formTitle={'ProfileUpdate'} 
      submitBtnText='Update'>
         <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
