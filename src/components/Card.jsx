import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom';

function Card(props) {
    const [isTruncated, setIsTruncated] = useState(true);
    const [showReadMore, setShowReadMore] = useState(false);
    const contentRef = useRef(null);
    const imageRef = useRef(null)
  
    const textContent = props.text
  
    useEffect(() => {
      const content = contentRef.current;
      if (content.scrollHeight > content.clientHeight) {
        setShowReadMore(true);
      } else {
        setShowReadMore(false); 
      }
    }, [textContent]);
  

  return (
    <div className='card'>
    <img ref={imageRef} src={`https://picsum.photos/200?random=${props.id}`} alt="" />
    <div className='details-container'>
      <h4>{props.title}</h4>
      <div className='content'>
        <div className='p-container'>
          <p
            ref={contentRef}
            style={{
            height: isTruncated ? '59px' : 'auto',
            }}
          >
            {textContent}
          </p>
          {showReadMore && (
            <span >
             Read More
            </span>
           )}
        
        </div>
  
        <div className='lt-grad'><NavLink to={`/item/${props.id}`} state={{data:props,image:imageRef.current ? imageRef.current.src :""}} >&gt;</NavLink></div>
      </div>
    </div>
  </div>
  )
}

export default Card