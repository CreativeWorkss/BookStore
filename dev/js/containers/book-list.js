import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'


class BookList extends Component {

    constructor(){
        super();
        this.state = {
            search : ''
        }
    }

    updateSearch(event) {

        this.setState({
            search : event.target.value.substr(0 , 20)
        })
    }

    renderList() {
        let filteredBooks = this.props.books.filter(
            (book) => {
                return book.name.indexOf(this.state.search) !== -1 || book.author.indexOf(this.state.search) !== -1;
            }
        )


        return filteredBooks.map((book) => {
            return (
                <li
                    key={book.id}
                    onClick={() => this.props.selectBook(book)}
                >
                  <b>Name:</b>{''}{book.name} {' '}<b>By</b> {' '}{book.author}
                </li>
            );
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />                
            <p>Search for book in Library</p>
            <ul>
                {this.renderList()}
            </ul>

            </div>
        );
    }

}

// Get apps state and pass it as props to BookList
//      > whenxever state changes, the BookList will automatically re-render
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Get actions and pass them as props to to BookList
//      > now BookList has this.props.selectBook
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//      > BookList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(BookList);
