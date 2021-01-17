import React , { useEffect , useState } from 'react';
import {auth} from './firebase';
import { Nav } from 'react-bootstrap';

function NavButton() {

    const [logo , setLogo] = useState("fas fa-sign-out-alt");
    const [texT , setText] = useState('Adios !  ');
    const [url , setUrl] = useState('Login');
    useEffect(() => {
        
        auth.onAuthStateChanged(authUser => {   
            
            
          if(authUser){
            setLogo("fas fa-sign-out-alt");
            setText(authUser.displayName || authUser.email);
            
                       

          }
          else{
            
            setLogo("fa fa-user");
            setText('Join!  ');
            setUrl("Login");
          }
          
        })
    
      }, [])


    return (
        <div>
            <Nav.Link href={url} className= "navbar-exit">{texT} &nbsp; 
            <i className= {logo}></i>
            </Nav.Link>
            
        </div>
    )
}

export default NavButton
