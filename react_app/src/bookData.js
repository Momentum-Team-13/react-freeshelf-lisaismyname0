import React from 'react'
import { useState } from 'react'

export default function InfoCard({book, index}){
  const [minimized, setMinimized] = useState(false)

  return(
    // BOOKS.map((book)=> (
    <div id ="book" key = {book.title}> 
      <div className ="title">{book.title}</div>
      <div>by: {book.author}</div>
      <div>{book.shortDescription}</div>
      <img className ='image' src={book.coverImageUrl} alt= "photograph of book cover"></img>
      <div class ="expanded">
      { minimized ? (
      <button type="button" aria-expanded="true" onClick={() => setMinimized(!minimized)}>Show Less</button>  
        ) : (
          <button type="button" aria-expanded="false" onClick={() => setMinimized(!minimized)}>Show More</button>)}
      </div>

      {minimized ? (
      <DetailCard book={book} key = {index}/>): ("")
    }
    </div>
    )
  }

function DetailCard ({book}){
  return (
    <div>
    <br></br>
      <div>{book.detailedDescription}</div>
      <div>Published {book.publicationDate} by {book.publisher}</div>
      <a href='{book.url}'>{book.url}</a>
    </div>
  )
}

