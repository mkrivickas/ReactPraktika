import React from 'react';
import './PostContent.css'

function PostContent(props) {
    let { title, content, img } = props;
    return (
        <div>
        <img className="postImg" src={img} alt={"post-img"} />
            <h3>{title}</h3>            
            <p>{content}</p>
        </div>
    );
}

export default PostContent;
