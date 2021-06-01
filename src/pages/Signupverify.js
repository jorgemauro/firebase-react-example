

import {firebaseAuth} from '../service/FirebaseService'


const Signupverify = ()=>{
    firebaseAuth.signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      window.localStorage.removeItem('emailForSignIn');})
    .catch((error) => {
    });

return(
    <div style={{width:'100%', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Paper style={{width:'320px', height:'520px', display:'flex', flexFlow:'column'}}>
      <h1>Cadastro</h1>
      </Paper>
    </div>
 
)

}

export default Signupverify