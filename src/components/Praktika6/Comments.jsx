import React from 'react';

function Comments(props) {
    let { comments } = props;
    return <div>
        {comments.map((comment) => <li>{comment.name}</li>)}
    </div>
}

export default Comments;
