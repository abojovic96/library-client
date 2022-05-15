import Card from "../UI/Card";
import classes from './RegisterFrom.module.css'
import Button from "../UI/Button";
import { useRef } from 'react';

function LoginForm(props){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    function submitRegisterFormHandler(event){
        event.preventDefault();

        const unPassed = username.current.value;
        const emPassed = email.current.value;
        const pwPassed = password.current.value;
        const cpwPassed = confirmPassword.current.value;

        props.onRegister(unPassed, emPassed, pwPassed, cpwPassed);
    };

    return(
        <Card className={classes.register}>
            <h1 className={classes.h1}>Register</h1>
            <form onSubmit={submitRegisterFormHandler}>
                <div className={classes.control}>
                    <label htmlFor='username'>Username: </label> 
                    <input 
                        type='text'
                        id='username'
                        ref={username}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>E-mail: </label> 
                    <input 
                        type='email'
                        id='email'
                        ref={email}
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
                <div className={classes.control}>
                    <label htmlFor='confpass'>Confirm password: </label> 
                    <input 
                        type='password'
                        id='confpass'
                        ref={confirmPassword}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>Register</Button>
                </div>
            </form>
        </Card>
    );
};

export default LoginForm;