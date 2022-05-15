import classes from './BookItem.module.css';
import { useNavigate } from 'react-router-dom';

function BookItem(props){
    const navigate = useNavigate();
    function imgClickHandler(){
        navigate(`${props.id}`)
    };

    return(
            <div className={classes.book}>
                <div className={classes.cover}>
                    <img src={props.cover} alt="cover" onClick={imgClickHandler}/>
                </div>
                <div className={classes.description}>
                    <p className={classes.title}>
                        {props.title}<br />
                        <span className={classes.author}>{props.author} - {props.genre}</span>
                    </p>
                </div>
             </div>
    );
};

export default BookItem;