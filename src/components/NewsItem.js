import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let  {title, descirption, imageurl, newsurl, author, date, source}=this.props;
    
  
    return (
      <div className="my-3">
       <div className="card" >
       <span className=" badge rounded-pill bg-danger"> {source} </span>
  <img src={!imageurl?"https://www.livemint.com/lm-img/img/2023/11/16/1600x900/garena_free_fire_max_1688877791610_1700111403505.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span class="badge bg-secondary">  
    New
    <span class="visually-hidden">unread messages</span>
  </span></h5>
    <p className="card-text">{descirption}</p>
    <p className="card-text"><small className="text-muted">By {author? author:"unknown"} on {new Date(date).toGMTString()} </small></p>
    <a href={newsurl} target="_blank" rel="noopener noreferrer" className= "btn btn-sm btn-primary">Click here to Read more </a>
  </div>
  </div> 
      </div>
    )
  }
}

export default NewsItem
