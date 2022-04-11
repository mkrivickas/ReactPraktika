import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function User(props) {
    let { title, body } = props;
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Button variant='light'>Contact</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default User;
