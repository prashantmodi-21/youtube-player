import React from 'react'
import VideoITem from './VideoITem'

const Aside = (props) => {
  const {items} = props.output
  const handleId = (id)=>{
    props.eid(id)
  }
  return (
    !props.output ? <div>Videos Not Available</div> : 
    <div>
    {items.map((e)=>{
    return <VideoITem items={e} key={e.etag} vid={handleId}/>
    })}
    </div>
  )
}

export default Aside
