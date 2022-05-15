import classes from './BookDetailed.module.css';

function BookDetailed(props){
    return(
        <div className='centered'>
            <div className={classes.div}>
                <div className={classes.subdiv}>
                    <img className={classes.img} src={props.cover} alt='cover'/>
                </div>
                <div className={classes.subdiv}>
                    <p className={classes.bold}>{props.title}</p>
                    <p className={classes.bold}>{props.author}</p>
                    <p className={classes.bold}>{props.genre}</p>
                    <p className={classes.bold}>Price: </p>
                    <p>{props.price} $</p>
                    <p className={classes.bold}>Summary: </p>
                    <p>{props.summery}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetailed;