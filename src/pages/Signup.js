import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {firebaseAuth} from '../service/FirebaseService'
const Signup = ()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setshowPassword]=useState(false)
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
    createUser();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
const createUser = () => {
    firebaseAuth.createUserWithEmailAndPassword(email,password)
    window.localStorage.setItem('emailForSignIn', email);
    firebaseAuth.sendSignInLinkToEmail(email,{})
};
return(
    <div style={{width:'100%', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Paper style={{width:'320px', height:'520px', display:'flex', flexFlow:'column'}}>
      <h1>Cadastro</h1>
        <TextField 
        style={{margin:'5px 0'}}
          id="outlined-basic" 
          label="Nome" 
          name="displayName"
          variant="outlined" 
          value = {displayName}
          onChange = {(event) => setDisplayName(event.currentTarget.value)} 
          />
          <TextField 
          style={{margin:'5px 0'}}
          id="outlined-basic" 
          label="Email" 
          name="userEmail"
          variant="outlined" 
          value = {email}
          onChange = {(event) => setEmail(event.currentTarget.value)} 
          />
          <FormControl style={{margin:'5px 0'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="userPassword" 
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>setshowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          </FormControl>
          <Button
          style={{
            marginTop: '20px',
            display: 'inline-block',
            backgroundColor: "#8e192f",
            color: '#ffffff'
        }}
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event);
            }}
          >
            Cadastrar
          </Button>
      </Paper>
    </div>
 
)

}

export default Signup