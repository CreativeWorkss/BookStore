import {combineReducers} from 'redux';
import BookReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book';
import AddBookReducer from './reducer-add-book';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer,
    addBook:AddBookReducer
});

export default allReducers
