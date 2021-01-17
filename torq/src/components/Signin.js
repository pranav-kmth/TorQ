import React , {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import {auth , signInWithGoogle } from './firebase';


function Signin() {
    const history = useHistory();
    const [email  , setEmail ] =  useState('');
    const [password , setPass] = useState('');
    

    const signInWithEmailAndPasswordHandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email , password)
        .then(auth => {
            console.log(auth);
            history.push('/');
        }
        )
        .catch((err) => {
            alert(err.message);
        });
        
    }

    const onChangePassHandler = (event) => {
        setPass(event.target.value);
        console.log(password);
    }
    const onChangeMailHandler = ( event )=> {
        setEmail(event.target.value);
        console.log(email);
    }


    return (
        <div className="mt-8">
          <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
          <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
            
            <form className="">
              <label htmlFor="userEmail" className="block">
                Email:
              </label>
              <input
                type="email"
                className="my-1 p-1 w-full"
                name="userEmail"
                value = {email}
                placeholder="E.g: faruq123@gmail.com"
                id="userEmail"
                onChange = {onChangeMailHandler}
              />
              <br/>
              <label  className="block">
                Password:
              </label>
              <input
                type="password"
                className="mt-1 mb-3 p-1 w-full"
                name="userPassword"
                value = {password}
                placeholder="Your  Password"
                id="userPassword"
                onChange = {onChangePassHandler}
              />
              <br/>
              <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-black" type="submit" onClick = {signInWithEmailAndPasswordHandler}>
                Sign in
              </button>
            </form>
            <p className="text-center my-3">or</p>
            <button
              className="bg-red-500 hover:bg-red-600 w-full py-2 text-black"
              onClick = {signInWithGoogle}>
              Sign in with Google
            </button>
            <p className="text-center my-3">
              Don't have an account?{" "}
              <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                Sign up here
              </Link>{" "}
              <br />{" "}
              <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      );
    };
export default Signin
