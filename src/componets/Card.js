import React from 'react';

import './style.css';



export default function Card(props){

    let badgeText
  if(props.item.openSpots===0){
    badgeText="SOLD OUT"
  }else if (props.item.location==="Online"){
    badgeText="ONLINE"
  }
    return (
        <div className='card'>
            {badgeText &&<div className='card--badge'>{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div className='card--stats'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/895/214/small/merry-christmas-golden-star-flat-style-icon-free-vector.jpg" className="star" />
            <span className='rating'>{props.item.stats.rating} </span>
            <span className='rating--text'> ({props.item.stats.reviewCount} ) - {props.item.location} </span>
            </div>
          
            <p className='content'>{props.item.title} </p>
            <p className='prize'><span className="bold">From $ {props.item.price} </span> /person</p>
        </div>
        
    );
}