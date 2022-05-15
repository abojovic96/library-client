import { NavLink, useNavigate } from "react-router-dom";
import classes from './MainHeader.module.css';
import { authActions } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function MainHeader(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token =  useSelector(state => state.auth.token);

    function logoutHandler(){
        dispatch(authActions.logoutUser());
        navigate('/books');
    };

    return(
        <header className={classes.header}>
            <div className={classes.logo}>Books-React-Learning-Project</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        search bar to be implemented
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''}
                            to="/books">All Books</NavLink>
                    </li>
                    {!token &&
                    <Fragment>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''}
                            to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? classes.active : ''}
                            to="/register">Register</NavLink>
                    </li>
                    </Fragment>}
                    {token && 
                    <li>
                        <button className={classes.btn} onClick={logoutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;