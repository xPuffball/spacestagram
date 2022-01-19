// import dependencies
import React, { useState } from 'react'

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar } from '@material-ui/core'

import ReadMore from './ReadMore'
const PostCard = ({ title, date, url, hdurl, explanation, copyright }) => {

    const dateToString = (date) => {
        const dateObj = new Date(date)
        const year = dateObj.getFullYear()
        const month = intToMonth(dateObj.getMonth() + 1)
        const day = dateObj.getDate()
        return `${month} ${day}, ${year}`
    }

    const intToMonth = (month) => {
        let months = [ "January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December" ];
        return months[month]

    }


    return (
        <Card style={{ maxWidth: 345 }}>   
            <CardHeader
                avatar={
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" aria-label="recipe" alt='NASA'/>
                }
                title={title}
                subheader={dateToString(date)}
            />
            <CardMedia
                component="img"
                height="200"
                image={url}
            />
            {copyright &&
                <Typography variant="caption" fontSize='0.1px' color="textSecondary">
                    {`Copyright: ${copyright}`} 
                </Typography>
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <ReadMore content={explanation}></ReadMore>
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">Test Actions!</Typography>
            </CardActions>
        </Card>
    )
}

export default PostCard