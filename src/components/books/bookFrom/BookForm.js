import classes from './BookForm.module.css';
import Card from '../../UI/Card';
import { useRef } from 'react';
import Button from '../../UI/Button';

function BookForm(props){
    const authorFirstName = useRef();
    const authorLastName = useRef();
    const summery = useRef();
    const genre = useRef();
    const price = useRef();
    const title = useRef();
    const cover = useRef();


    const h1 = 'Add new book'
    const button = 'Add book'

    function submitBookForm(event){
        event.preventDefault();
        const bookData =
        {
           title: title.current.value,
           author: authorFirstName.current.value + '+' + authorLastName.current.value,
           genre: genre.current.value,
           cover: cover.current.value,
           price: price.current.value,
           summery: summery.current.value
        };

        props.onSubmit(bookData);
    }

    return(
        <Card className={classes.newbook}>
            <h1 className={classes.h1}>{h1}</h1>
            <form onSubmit={submitBookForm}>
                        <div className={classes.control}>
                            <label>Author name: </label>
                            <input 
                                ref={authorFirstName}
                                className={classes.short}
                                type='text'
                                placeholder='firstname'
                            />
                            <input
                                ref={authorLastName} 
                                className={classes.short}
                                type='text'
                                placeholder='lastname'
                            />
                            <p className={classes.mono}>
                                *in case of mononymous author (e.g. Rumi, Aristotle) use firstname box
                            </p>
                        </div>
                        <div className={classes.control}>
                            <label>Title: </label>
                            <input 
                                ref={title} 
                                type='text'
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Genre: </label>
                            <input 
                                ref={genre} 
                                type='text'
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Price: </label>
                            <input 
                                ref={price} 
                                type='number'
                                step='0.01'
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Cover (url): </label>
                            <input 
                                ref={cover} 
                                type='text'
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Summery: </label>
                            <textarea 
                                ref={summery} 
                                className={classes.summery}
                                placeholder='up to 450 characters'
                                maxLength='450'
                            />
                        </div>
                <div className={classes.actions}>
                    <Button type='submit'>{button}</Button>
                </div>    
            </form>
        </Card>
    );
};

export default BookForm;