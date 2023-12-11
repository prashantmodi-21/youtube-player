import React from 'react'

const Main = (props) => {
  const {id, snippet} = props.output
  return (
    !props.output ? <div> Internal Server Error </div> : 
    <div className='m-4 w-[100vw]'>
      <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <h1 className='text-4xl font-medium my-2'>{snippet.title}</h1>
      <p className='text-md font-medium my-2'>{snippet.channelTitle}</p>
      <p className='text-sm'>{snippet.description}</p>
    </div>
  )
}

export default Main
