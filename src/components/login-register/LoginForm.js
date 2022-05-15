import Card from "../UI/Card";
import classes from './LoginForm.module.css'
import Button from "../UI/Button";
import { useRef } from "react";
 

function LoginForm(props){
    const username = useRef();
    const password = useRef();
    

    function submitLoginFormHandler(event){
        event.preventDefault();
        
        const unPassed = username.current.value;
        const pwPassed = password.current.value;

        props.onLogin(unPassed, pwPassed);  
    };

    
    return(
        <Card className={classes.login}>
            <h1 className={classes.h1}>Login</h1>
            <form onSubmit={submitLoginFormHandler}>
                <div className={classes.control}>
                    <label htmlFor='username'>Username: </label> 
                    <input 
                        type='text'
                        id='username'
                        ref={username}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password: </label> 
                    <input 
                        type='password'
                        id='password'
                        ref={password}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>Login</Button>
                </div>
            </form>
        </Card>
    );
};

export default LoginForm;