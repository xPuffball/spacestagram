// import dependencies
import react, { useEffect, useState } from 'react'
import axios from 'axios'

// import material-ui componenets
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';

// import componenets
import PostCard from './PostCard'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

const Feed = () => {

    // state for api response
    const [feed, setFeed] = useState([])
    
    // state for loading
    const [loading, setLoading] = useState(true)

    // getFeed => fetch data from NASA API & stores it in state feed
    const getFeed = async () => {
        setLoading(true)
        axios.get('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY, {
            params: {
                count: 10
            }
        })
        .then(res => {
            setLoading(false)
            setFeed(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <Box style={{display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center'}}>
            <Box style={{margin: '4rem'}}>
                <CardHeader 
                    avatar={
                        <Box style={{fontSize: '50px'}}>
                            &#127756;
                        </Box>
                    }
                    title={
                        <Typography variant="h5" fontWeight={'bold'}>
                            Welcome to Spacestagram!
                        </Typography>
                    }
                    subheader={
                        <Typography variant="subtitle1">
                            Browse the coolest pictures from NASA's Astronomy Picture of the Day.
                        </Typography>
                    }
                />
            </Box>
            {!loading ? feed.map((post, index) => {
                return (
                    <PostCard
                        key={index}
                        title={post.title}
                        date={post.date}
                        url={post.url}
                        hdurl={post.hdurl}
                        explanation={post.explanation}
                        copyright={post.copyright}
                    />
                )
            })
            : 
            <>
                <CircularProgress />
                <Typography variant="caption" fontSize='0.1px' color="textSecondary">Loading your cool (&#128526;) space pictures...</Typography>            
            </>
            }      
        </Box>
    )
}

export default Feed