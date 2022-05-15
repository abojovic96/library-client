import AddBook from './AddBook';
import BookItem from './BookItem';
import classes from './BookShelf.module.css';
import { useSelector } from "react-redux";


function BookShelf(props){
    const token = useSelector(state => state.auth.token);
    const books = props.books;
    
    return(
        <div className={classes.container}>
            {books.map(book => (
                <BookItem 
                    key={book.id}
                    id={book.id}
                    cover={book.cover}
                    author={book.author}
                    genre={book.genre}
                    title={book.title}                        
                /> 
            ))} 
            {token && <AddBook />}
        </div>
    )
};

export default BookShelf;