import React from 'react'
import { useState } from 'react'



// console.log (BOOKS)

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
      <button onClick ={()=> setMinimized(!minimized)} href=''>{minimized ? 'Show Less' : 'Show More'}</button>
      <div>{minimized ? `${book.detailedDescription}` : null }</div>
      </div>
      <div>{minimized ? `Published ${book.publicationDate} by ${book.publisher}` : null }</div>
      <div>{minimized ? `${book.url}`: null }</div>

    {minimized ? (
    <DetailCard book={book} key = {index}/>): ("")
    }

    </div>
    )
  }

function DetailCard ({book}){
  return (
    <div>
      <div>{book.detailedDescription}</div>
      <div>{book.publicationDate} by {book.publisher}</div>
      <div>{book.url}</div>
      
    </div>
  )
}

