import axios from 'axios';
import {Navbar, Main, Aside} from "./components/index"
import { useEffect, useState } from 'react';

function App() {
  const [video, setVideo] = useState()
  const [items, setItems] = useState()

  useEffect(()=>{
    searchQuery("lla")
  }, [])

  const searchQuery = async(query)=>{
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&q=${query}&type=video&part=snippet`)
    setItems(response.data)
    setVideo(response.data.items[0])
}

const itemId = async(id)=>{
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&q=${id}&type=video&part=snippet`)
  setVideo(response.data.items[0])
}

  return (
    <>
    <Navbar term={searchQuery}/>
    <div className='flex'>
    <Main output={!video ? "" : video}/>
    <Aside output={!items ? "" : items} eid={itemId}/></div>
    </>
  )
}

export default App
