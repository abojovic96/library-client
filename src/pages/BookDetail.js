import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getDetailedBook, deleteBook } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import BookDetailed from '../components/books/BookDetailed';
import Card from '../components/UI/Card';
import { useSelector } from 'react-redux';

function BookDetail(){
    const params = useParams();
    const { bookId } = params;
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();

    const { sendRequest, status, data: loadedBook, error } = useHttp(getDetailedBook, true);
    const deleteHttpRequest = useHttp(deleteBook, true);
    
    useEffect(() => {
        sendRequest(bookId)
    },[sendRequest, bookId]);

    useEffect(() => {
        if(deleteHttpRequest.status === 'completed'){
            navigate('/books');
        }
    },[deleteHttpRequest.status, navigate])

    if(status === 'pending'){
        return(
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    };

    if(error){
        return(
            <h1 className='centered'>
                {error}
            </h1>);
    };

    function deleteBookHandler(){
        const tokenForHeader = "Bearer " + token;
        deleteHttpRequest.sendRequest(bookId, tokenForHeader);

        if(deleteHttpRequest.status === 'pending'){
            return(
                <div className='centered'>
                    <LoadingSpinner />
                </div>
            );
        };

        if(deleteHttpRequest.error){
            return(
                <p className='centered'>
                    {deleteHttpRequest.error}
                </p>
            );   
        };
    };

    return(
        <Card>
            <BookDetailed 
                id={loadedBook.id}
                cover={loadedBook.cover}
                author={loadedBook.author}
                genre={loadedBook.genre}
                price={loadedBook.price}
                summery={loadedBook.summery}
                title={loadedBook.title}
            />
            {token &&
            <div className='centered'>
                <button className='btn--delete' onClick={deleteBookHandler}>DELETE</button>
                <Link to={`/update/${bookId}`} className='btn--flat'>UPDATE</Link>
            </div>}
        </Card>
    );
};

export default BookDetail;