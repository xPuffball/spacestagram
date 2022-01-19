// import dependencies
import React, { useState } from 'react'

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Avatar, IconButton, Popover, Modal, Box } from '@material-ui/core'
import FavoriteIcon  from '@material-ui/icons/Favorite';
import FavoriteBorder  from '@material-ui/icons/FavoriteBorder';

import ReadMore from './ReadMore'
const PostCard = ({ title, date, url, hdurl, explanation, copyright }) => {

    // states for like button
    const [liked, setLiked] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    // states for image modal
    const [imgOpen, setImgOpen] = useState(false)
    
    const handleImgClose = () => {
        setImgOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClick = (event) => {
        setLiked(!liked)
        if(!liked) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    //Popover Properties
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
        <Card style={{ maxWidth: 400 }}>   
            <CardHeader
                avatar={
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" aria-label="recipe" alt='NASA'/>
                }
                title={title}
                subheader={dateToString(date)}
            />
            <CardMedia
                onClick={() => setImgOpen(true)}
                component="img"
                height="200"
                image={url}
            />
            {copyright &&
                <Typography variant="caption" fontSize='0.1px' color="textSecondary">
                    {`Copyright: ${copyright}`} 
                </Typography>
            }
            <CardContent style={{paddingTop: '0px', paddingBottom: '0px'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    <ReadMore content={explanation}></ReadMore>
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleClick}>
                    {liked ? <FavoriteIcon color="primary"/> 
                    : <FavoriteBorder color="primary"/>}
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}                
                     >
                <Typography 
                    style={{padding: '0.1rem 0.25rem', backgroundColor: '#0b3d91', color: 'white', display: 'flex', gap: '0.25rem'}}
                >
                    <FavoriteIcon style={{maxWidth: '18px'}} color="white"/>
                    Liked
                </Typography>
                </Popover>
            </CardActions>
            <Modal
                style={style}
                open={imgOpen}
                onClose={handleImgClose}
                >
                <img src={hdurl} alt="" width='400px'/>
            </Modal>
        </Card>
    )
}

export default PostCard