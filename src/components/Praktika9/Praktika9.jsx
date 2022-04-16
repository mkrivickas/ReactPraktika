import React from 'react';
import Praktika1 from '../Praktika1/Task';
import Praktika2 from '../Praktika2/Card';
import Praktika5 from '../Praktika5/TodoList';
import {
    BrowserRouter as Router,
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

export default function Praktika9() {
    return (
        <BrowserRouter>
            <div>
                <h1>Užduotis 9</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/praktika1'>Praktika 2</Link>
                        </li>
                        <li>
                            <Link to='/praktika2'>Praktika 3</Link>
                        </li>
                        <li>
                            <Link to='/praktika5'>Praktika 6</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path='/praktika1' element={<Praktika1 />}></Route>
                    <Route path='/praktika2' element={<Praktika2 />}></Route>
                    <Route path='/praktika5' element={<Praktika5 />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

function Task2() {
    return <h2>Task2</h2>;
}

function Task3() {
    return <h2>Task3</h2>;
}

function Task6() {
    return <h2>Task6</h2>;
}
