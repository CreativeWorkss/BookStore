import React from 'react';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-detail';
import BookAdd from '../containers/book-add';
//require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Add Book</h2>
        <BookAdd/>
        <h2>Book List In Library</h2>
        <BookList />
        <hr />
        <h2>Book Details</h2>
        <BookDetails />
    </div>
);

export default App;
