"use client"
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

interface Props {}

function Loading(props: Props) {
    const {} = props
    const [progress, setProgress] = useState(0)
    return (
      <LoadingBar
        color='#15803D'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    )
}

export default Loading
