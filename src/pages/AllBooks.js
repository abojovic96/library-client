import { Fragment, useEffect } from "react";
import BookShelf from "../components/books/BookShelf";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllBooks } from '../lib/api';
import { useSelector } from 'react-redux';



function AllBooks(){
    const { sendRequest, status, data: books, error } = useHttp(getAllBooks, true);
    
    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    };

    if(error){
        return (<h1 className="centered">
            {error}
        </h1>);
    };

    return(
        <Fragment>
            <BookShelf books={books}/>
        </Fragment>
    );
};

export default AllBooks;