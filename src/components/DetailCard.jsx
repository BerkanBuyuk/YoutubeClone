import React from 'react'
import ReactPlayer from 'react-player'

const DetailCard = ({video}) => {
  return (
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`}/>
    </div>
  )
}

export default DetailCard