import { Fragment, useEffect } from "react";
import BookForm from "../components/books/bookFrom/BookForm";
import useHttp from "../hooks/use-http";
import { addBook } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useSelector } from "react-redux";

function AddBook(){
    const token = useSelector(state => state.auth.token);
    const { sendRequest, status, error } = useHttp(addBook, true);
    const navigate = useNavigate();

    useEffect(() =>{
        if(status === 'completed'){
            navigate('/books');
        }
    },[status, navigate])

    function onSubmitHandler(bookData){
        const tokenForHeader = 'Bearer ' + token;
        console.log(tokenForHeader);
        //addBook(bookData, tokenForHeader);
        sendRequest(bookData, tokenForHeader);

        if(status === 'pending'){
            return(
                <div className="centred">
                    <LoadingSpinner />
                </div>
            )
        };

        if(error){
            return(
                <p className="centred">
                    {error}
                </p>
            )
        };
    };

    return(
        <Fragment>
            <BookForm onSubmit={onSubmitHandler}/>
        </Fragment>
    );
};

export default AddBook;