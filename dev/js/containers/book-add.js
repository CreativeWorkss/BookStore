import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addBook} from '../actions/index'

class BookAdd extends Component {

    constructor(){
        super();
        this.state = {
            books: []
          }

      
    }

    updateValue(event) {

        this.setState({
            id:this.state.id,
            name:this.state.name,
            author:this.state.author
        })
        this.props.addBook(this.state);
    }

    inputChanged (event, field)  {
        this.setState({ [field]: event.target.value });
      }
    
      updateValue () {
        this.props.addBook({ id: this.state.id, name: this.state.name , author: this.state.author });
      }
    

  
    render() {
     
        return (
            <div>                
              <input id="id" onChange={(event) => this.inputChanged(event, 'id')} />
              <input id="name" onChange={(event) => this.inputChanged(event, 'name')}/>
              <input id="author" onChange={(event) => this.inputChanged(event, 'author')}/>
              <button onClick={this.updateValue.bind(this)}>Add Book</button>
         
            </div>
        );
    }
}


// Get apps state and pass it as props to BookList
//      > whenxever state changes, the BookList will automatically re-render
function mapStateToProps(state) {
    return {
        books: state.addBook
    };
}

// Get actions and pass them as props to to BookList

function matchDispatchToProps(dispatch){
    return bindActionCreators({addBook: addBook}, dispatch);
}

//      > BookList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(BookAdd);
