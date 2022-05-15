import { Fragment, useEffect } from "react";
import LoginForm from '../components/login-register/LoginForm';
import useHttp from "../hooks/use-http";
import { requestLogin } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { authActions } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sendRequest, status, data: loggedInInfo, error } = useHttp(requestLogin, false);

    useEffect(() => {
        if(status === 'completed' && !error){
            dispatch(authActions.loginUser(loggedInInfo))
            navigate('/books');
            alert('Login successful.')
        }
    },[loggedInInfo, dispatch, status, navigate, error])
    

    function loginHandler(username, password){
        sendRequest({
            username: username,
            password: password
        })
    };

    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    
    if(error){
        alert(error);
    };

    return(
        <Fragment>
            <LoginForm onLogin={loginHandler}/>
        </Fragment>
    );
};

export default Login;