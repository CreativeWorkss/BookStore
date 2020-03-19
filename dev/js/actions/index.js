export const selectBook = (book) => {
    console.log("You clicked on book: ", book.name);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
};


export const addBook =  (book) => {
    console.log("You added a book: ", book.name);
    return {
        type: 'BOOK_ADD',
        payload: book
    }
};
