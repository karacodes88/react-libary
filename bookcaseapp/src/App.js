
import React, { useState } from 'react';
import Book from './components/Book';
import bookList from './models/books.json';
import Header from './components/Header';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

const App = (props) =>{
   const [books] = useState(bookList);
   
   
  return (
     bookList.map(bookItem => <Book key={bookItem.id} book={bookItem}/>)
   );
}

export default App;
  

/* <BrowserRouter>
 <Route exact path="/" render={() => ( <>
<Header />
<h2>Welcome to the Bookcase App</h2>
<BookList books={books}/> </>
)} />
<Route path= "/bookcase"/>
 </BrowserRouter> */