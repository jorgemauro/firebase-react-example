import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";
import {firebaseAuth} from '../service/FirebaseService'
const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword]=useState(false)
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        firebaseAuth.login(email,password)
      event.preventDefault();
    }
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };


return(<div style={{width:'100%', height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div style={{width:'320px', height:'520px', display:'flex', flexFlow:'column'}}>
<h1>Login</h1>
<TextField 
          style={{margin:'5px 0'}}
          id="outlined-basic" 
          label="E-mail" 
          name="userEmail"
          variant="outlined" 
          value = {email}
          onChange = {(event) => onChangeHandler(event)} 
          />
    <FormControl style={{margin:'5px 0'}} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      name="userPassword" 
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(event) => onChangeHandler(event)}
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
    <Button  variant="contained" style={{
              marginTop: '20px',
              display: 'inline-block',
              backgroundColor: "#8e192f",
              color: '#ffffff'
          }} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
      Login
    </Button>
    <Link style={{textAlign:"center", margin:'10px'}} to='/signup'>Cadastre-se</Link>
</div>
</div>)
}

export default Login