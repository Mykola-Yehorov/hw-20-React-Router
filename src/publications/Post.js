import React from "react";

import { ImCheckboxChecked } from "react-icons/im";
import { ImBubble } from "react-icons/im";
import { ImHeart } from "react-icons/im";
import { ImUpload2 } from "react-icons/im";
import { ImLoop2 } from "react-icons/im";

const Post = (props) => {
    return(
    <div className="card">
      <div className="card__up">
        <img src={props.photo} className="card__up-ava"></img>
        <div className="card__up-descr">
          <div className="card__up-title-wrapper">
           <div className="card__up-title">{props.name}</div>
           <div className="card__up-checked">< ImCheckboxChecked /></div>
           <div className="card__up-nickname">{props.nickname}</div>
           <div className="card__up-point"> · </div> 
           <div className="card__up-date">{props.date}</div>
          </div> 
          <div className="card__up-content">{props.content}</div>       
        </div>
      </div>
      <div className="card__img-wrapper">
        <img src={props.image} className="card__img"></img>      
      </div>
      <div className="card__buttons">
        <div className="card__button-wrapper">
          <button className="card__button">< ImBubble /></button>
          <div className="card__button-number">{props.comments}</div>
        </div>
        <div className="card__button-wrapper">
          <button className="card__button">< ImLoop2 /></button>
          <div className="card__button-number">{props.reposts}</div>
        </div>
        <div className="card__button-wrapper">
          <button className="card__button">< ImHeart /></button>          
          <div className="card__button-number">{props.likes}</div>
        </div>
        <div className="card__button-wrapper">
          <button className="card__button">< ImUpload2 /></button>
        </div>
      </div>
    </div>  
    )  
}

export default Post;