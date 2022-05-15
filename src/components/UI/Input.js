import classes from './Input.module.css';

function Input(props){
    return(
        <div className={classes.control}>
            <label htmlFor={props.label}>{props.label}</label> 
            <input 
                type={props.type}
                id={props.label}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;