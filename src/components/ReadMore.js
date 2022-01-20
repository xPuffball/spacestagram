import React, { useState } from 'react'

import Box from '@material-ui/core/Box';

const ReadMore = ({ content }) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const [hover, setHover] = useState(false);

    const toggleMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <Box className="text" component={'span'}>
        {isReadMore ? content.slice(0, 200) : content}
        <span onClick={toggleMore} 
              onMouseEnter={() => setHover(!hover)} 
              onMouseLeave={() => setHover(!hover)}
              style={hover ? {cursor: 'pointer', textDecoration: 'underline', color: '#252525'} : {}}
        >
          {isReadMore ? " ...read more" : " show less"}
        </span>
      </Box>
    );
  };

export default ReadMore