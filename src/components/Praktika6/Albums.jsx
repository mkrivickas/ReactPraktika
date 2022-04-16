import React from 'react'

function Albums(props) {
    let { albums } = props;
    return <div>
        {albums.map((album) => <li>{album.title}</li>)}
    </div>
}

export default Albums