import React , {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import {auth , provider } from './firebase';
import './Login.css';
import logo from '../assets/logo.jpeg';
import Fade from 'react-reveal';
import bg from '../assets/clouds.png';


function Login(props) {

    const history = useHistory();
    const [email  , setEmail ] =  useState('');
    const [password , setPassword] = useState('');
    

    const signInWithEmailAndPasswordHandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email , password)
        .then(result => {
            console.log(result);                       
            history.push('/');
        }
        )
        .catch((err) => {
            alert(err.message);
        });
        
    }

    const onChangePassHandler = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }
    const onChangeMailHandler = ( event )=> {
        setEmail(event.target.value);
        console.log(email);
    }
    const signInWithGoogle = (event) => {
            event.preventDefault();
            auth
            .signInWithPopup(provider)
            .then((result) => {
                
                console.log(result);
                
                console.log("done");
                history.push('/');
            }).catch((error) => {
                
                console.log(error);
                
            });
        
    }

    return (
        

        <div className="login" style = {{
                    backgroundImage : 
                        `url(${bg})` 
                    ,
                    backgroundPosition : 'center' ,
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : 'cover' , 
                    objectFit : 'fill'
                    }}>
                
            <div className="loginContainer container bg-white pb-5">
            <div className="col-12"><center>Torq</center></div>
                <Fade>
                    <div>
                    <div className="row d-flex justify-content-start align-items-center mt-sm-5">
                    
                    <div className="col-lg-5 col-10">
                        <div className="pb-5"> 
                        <img className="loginImg"src={logo} alt=""/>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
                       
                        <div className="mt-3 mt-md-5">
                            <h5>Sign In</h5>
                            <form className="pt-4">
                                <div className="d-flex flex-column pb-3">
                                    <label >Email Address</label>
                                    <input  type="email" name="email" id="emailId" className="loginInput border-bottom border-primary" onChange = {onChangeMailHandler}/>
                                </div>
                                <div className="d-flex flex-column pb-3"> 
                                <label >Password</label> 
                                <input className="loginInput" type="password" name="passwrd" id="pwd" className="loginInput border-bottom border-primary" onChange={onChangePassHandler}/> </div>
                                
                                <input type="button" value="Sign in" className="btn btn-primary btn-block mb-3" onClick = {signInWithEmailAndPasswordHandler}/> 
                                <button className="btn btn-block bg-white border border-primary rounded " onClick = {signInWithGoogle}>
                                    <span className="fab fa-google text-primary px-2"></span>Log In with Google</button>
                                <div className="register mt-5">
                                    <p>Don't have an account? <Link to="/Signup" className="text-blue-500 hover:text-blue-600">
                                        Sign up here
                                    </Link>{" "}</p>
                                </div>
                            </form>
                        </div>
                    </div>                    
                </div>
                    </div>
                </Fade>
            </div>
            
        </div>


       
    )
}

export default Login
