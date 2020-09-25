import React, { FunctionComponent } from 'react'

import { VideoShowProps } from './interfaces'

const VideoShow: FunctionComponent<VideoShowProps> = ({ videoUrl, repeat }) => {
  return (
    <>
      <div>Hello world</div>
      <div>Video url: {videoUrl}</div>
      <div>Repeat: {repeat}</div>
    </>
  )
}

export default VideoShow
