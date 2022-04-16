import React from 'react'

function Photos(props) {
  let { photos } = props;
    return <div>
        {photos.map((photo) => <img src={photo.url}></img>)}
    </div>
}

export default Photos