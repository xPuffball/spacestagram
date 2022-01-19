import React, { useState } from 'react'

const ReadMore = ({ content }) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const [hover, setHover] = useState(false);

    const toggleMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">
        {isReadMore ? content.slice(0, 200) : content}
        <span onClick={toggleMore} 
              onMouseEnter={() => setHover(!hover)} 
              onMouseLeave={() => setHover(!hover)}
              style={hover ? {cursor: 'pointer', textDecoration: 'underline', color: '#252525'} : {}}
        >
          {isReadMore ? " ...read more" : " show less"}
        </span>
      </p>
    );
  };

export default ReadMore