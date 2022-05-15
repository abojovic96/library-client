const API_URL_CHUNK = 'https://localhost:44330/api';

export async function getDetailedBook(bookId){
    const response = await fetch(`${API_URL_CHUNK}/Books/${bookId}`);

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Could not fetch book.")
    };

    const loadedQuote = data;
    
    return loadedQuote;
};

export async function addBook(bookData, token){
    const response = await fetch(`${API_URL_CHUNK}/Books`,{
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not create a book.');
    }

    return null;
}

export async function deleteBook(bookId, token){
    const response = await fetch(`${API_URL_CHUNK}/Books/${bookId}`,{
        method: 'DELETE',
        headers: {
            'Authorization': token
        }
    })

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not delete a book.');
    }

    return null;
}

export async function getAllBooks(){
    const response = await fetch(`${API_URL_CHUNK}/Books`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Count not fetch books.');
    }

    const allBooks = data;
    return allBooks;
}

export async function requestLogin(loginData){
    const response = await fetch(`${API_URL_CHUNK}/authentication/login`, {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    var responseData = await response.json();

    if(!response.ok){

        throw new Error(responseData.message || 'There was an issue with login.');
    }

    const userLoginInfo = responseData;

    return userLoginInfo;
};

export async function requestRegistration(registrationData){
    const response = await fetch(`${API_URL_CHUNK}/authentication/register`, {
        method: 'POST',
        body: JSON.stringify(registrationData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){
        const data = await response.json();
        throw new Error(data.message || 'There was an issue with registration.');
    }

    return null;
};