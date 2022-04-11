import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Post(props) {
    let { title, body } = props;
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Button variant='primary'>Like</Button>
                    <Button variant='warning'>Hate</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Post;
