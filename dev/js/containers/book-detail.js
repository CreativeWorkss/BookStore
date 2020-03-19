import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.book)" because we set state to null by default
 * */

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return (<div>Click on the book list above..</div>);
        }
        return (
            <div>                
                <h2>{this.props.book.name}</h2>
                <h3>Author: {this.props.book.author}</h3>
                <h3>Publication: {this.props.book.publication}</h3>
            </div>
        );
    }
}

// "state.activeBook" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
