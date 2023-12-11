import React from 'react'

const VideoITem = (props) => {
const {id, snippet} = props.items
  return (
    <div className='cursor-pointer flex items-center' onClick={()=>{props.vid(id.videoId)}}>
      <img  className='m-4' src={snippet.thumbnails.default.url} alt="thumbnail" />
      <h1 className='text-md font-semibold'>{snippet.title}</h1>
    </div>
  )
}

export default VideoITem
