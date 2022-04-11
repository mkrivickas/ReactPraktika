import React from 'react';
import User from './User';
import Row from 'react-bootstrap/Row';

function Users(props) {
    let { users } = props;

    let list = users.map((user) => {
        return (
            <User
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                company={user.company}
            />
        );
    });
    console.log(users);
    return <Row>{list}</Row>;
}

export default Users;
