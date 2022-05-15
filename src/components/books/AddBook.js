import classes from './AddBook.module.css';
import { useNavigate } from 'react-router-dom';

function AddBook(props){
    const navigate = useNavigate();
    function imgClickHandler(){
        navigate('/add-book')
    };

    return(
            <div className={classes.addbook} onClick={imgClickHandler}>
                <h1 className={classes.h1}>+</h1>
                <h2 className={classes.h2}>Add book</h2>
             </div>
    );
};

export default AddBook;