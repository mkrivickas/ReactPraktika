import React, { useState, useEffect } from 'react';
import './Praktika8.css';
import { Button } from 'react-bootstrap';

function Praktika8() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUsers(json);
                setIsLoading(false)
            });
    }, []);
    return (
        <div>
            <h1>Užduotis 8</h1>
            {!isLoading && <img className="rounded-image" src={users[0].avatar_url} alt="" />}
            <h1>Heading</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore dolor aliquam optio, enim pariatur iusto cupiditate.
                Dignissimos accusantium placeat voluptas veritatis? Laudantium
                quaerat inventore odit doloribus cupiditate, dolorem eius aut!
            </p>
            <Button className="btn-secondary" onClick=(()=>{})>View details >></Button>
        </div>
    );
}

export default Praktika8;
