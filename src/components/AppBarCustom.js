import {useState} from 'react'
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const AppBarCustom = ()=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
return <AppBar position="static">
<Toolbar>
<IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Toolbar>
</AppBar>
}


export default AppBarCustom;