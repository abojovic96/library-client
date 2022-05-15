import { booksAction } from "./booksSlice";

export function fetchBooksData(){
    return async (dispatch) => {
        async function fetchData(){
            const response = await fetch('https://localhost:44330/api/Books');
            if(response.status !== 200){
                throw new Error('Error occured with a code: ' + response.status);
            };
            const data = await response.json();
            return data;
        };

        try {
            const booksData = await fetchData();
            dispatch(booksAction.setBooks({
                items: booksData
            }));
        } catch(error) {
            console.log('iz catch-a')
        };
    };
}