import React from "react";
import Book from "./Book";


function BookList (props){
    return (
        <div>
            {props.books.map((book) => (
            <Book key = {book.id} book ={book} addBook={props.addBook} booklist/> 
            ))}
        </div>
        
    );
}

export default BookList