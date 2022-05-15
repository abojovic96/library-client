import { Fragment, useEffect } from 'react';
import RegisterFrom from '../components/login-register/RegisterForm';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { requestRegistration } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    const { sendRequest, status, error } = useHttp(requestRegistration, false);

    useEffect(() => {
        if(status === 'completed'  && !error){
            navigate('/login');
            alert('Registration successful.')
        }
    },[navigate, status, error])

    function registerHandler(username, email, password, confirmPass){
        sendRequest({
            username: username,
            password: password,
            email: email,
            confirmPassword: confirmPass
        });
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
    }

    return(
        <Fragment>
            <RegisterFrom onRegister={registerHandler} />
        </Fragment>
    );
};

export default Register;