import React from 'react'
import { useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'

export default function InfoCard({book, index}){
  const [minimized, setMinimized] = useState(false)

  return(

    <div id ="book" key = {book.title}> 
    <div className="card_top">
      <div className = "text_info">
        <div className ="title">{book.title}</div>
        <div>by: {book.author}</div>
        <div>{book.shortDescription}</div>
      </div>
      { minimized ? (
      <div className ="disclosure-control"
      role ="button"
      aria-expanded={!minimized}
      onClick={()=> setMinimized(!minimized)}>
      <TriangleDownIcon size = {24} aria-label = "Show Less"/>
      <span>Show Less</span>
      </div> 
        ) : ("")
          }
      <div className = "photo">
      <img className ='image' src={book.coverImageUrl} alt= "photograph of book cover"></img>
      </div>
      <div>
      </div>
      </div>

      {minimized ? (
      <>
      <DetailCard book={book} key = {index}/>
      </>)
      : (
        <div className="disclosure-control"
        role ="button"
        aria-expanded={minimized}
        onClick={()=> setMinimized(!minimized)}>
        <TriangleRightIcon size ={24} aria-label ="Show More"/>
        <span>Show More</span>
        </div>
      )
    }
    </div>
    )
  }

function DetailCard ({book}){
  return (
    <div className= "detail">
    <br></br>
      <div>{book.detailedDescription}</div>
      <div>Published {book.publicationDate} by {book.publisher}</div>
      <div id ="url">
      <a href={book.url}>{book.url}</a>
      </div>
    </div>
  )
}

