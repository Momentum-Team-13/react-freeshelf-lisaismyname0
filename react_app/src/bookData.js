import React from 'react'
import { useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'

export default function InfoCard({book, index}){
  const [minimized, setMinimized] = useState(false)

  return(

    <div id ="book" key = {book.title}> 
    <span id = "head" className ="title">{book.title}</span>
    <span id = "head">by: <strong>{book.author}</strong></span>
    <br></br>
    <div className="card_top">
      <div className = "text_info">
        <div>{book.shortDescription}</div>
      { minimized ? (
      <div className ="disclosure-control"
      role ="button"
      aria-expanded={!minimized}
      onClick={()=> setMinimized(!minimized)}>
      <TriangleDownIcon size = {24} aria-label = "Show Less"/>
      <span><strong>Show Less</strong></span>
      </div> 
        ) : ("")
          }
      </div>
    <div>
      <div className = "photo">
      <img className ='image' src={book.coverImageUrl} alt= "photograph of book cover"
      onError={(e) => e.target.src = "default_book_cover.png"
      }/>
      </div>
    </div>
      <div>
      </div>
      </div>

      {minimized ? (
      <>
      <DetailCard book={book} key = {index}/>
      </>)
      : (
        <div className="text_info"
        role ="button"
        aria-expanded={minimized}
        onClick={()=> setMinimized(!minimized)}>
        <TriangleRightIcon size ={24} aria-label ="Show More"/>
        <span><strong>Show More</strong></span>
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
      <div className ='expanded'>{book.detailedDescription}</div>
            { book.publicationDate != null && 
      <span>Published {book.publicationDate}</span>
      } { book.publisher != null && 
        <span>by {book.publisher}</span>
        }
    <div id ="url">
      <a href={book.url} target="_blank" rel="noopener noreferrer">More Information</a>
      </div>
    </div>
  )
}

