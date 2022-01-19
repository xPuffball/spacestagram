// import dependencies
import react, { useEffect, useState } from 'react'
import axios from 'axios'

// import componenets
import PostCard from './PostCard'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

const Feed = () => {

    const [feed, setFeed] = useState([])

    // getFeed => fetch data from NASA API & stores it in state feed
    const getFeed = async () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY, {
            params: {
                count: 10
            }
        })
        .then(res => {
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
        <div>
            {feed.map(post => {
                return (
                    <PostCard
                        key={post.date}
                        title={post.title}
                        date={post.date}
                        url={post.url}
                        hdurl={post.hdurl}
                        explanation={post.explanation}
                        copyright={post.copyright}
                    />
                )
            })}
            <button onClick={() => console.log(feed)}>Get Feed!</button>           
        </div>
    )
}

export default Feed