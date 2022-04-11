import React from 'react';
import './App.css';
import Praktika0 from './components/Praktika0/Praktika0';
import Task from './components/Praktika1/Task';
import Card from './components/Praktika2/Card';
import ReadMore from './components/Praktika3/ReadMore';
import Praktika4 from './components/Praktika4/Praktika4';
import TodoList from './components/Praktika5/TodoList';
import PageData from './components/Praktika6/PageData';

function App() {
    return (
        <div>
            <Praktika0 />
            <PageData />
            <Task />
            <Card />
            {
                <div className='container card col-5 m-5 p-5'>
                    <ReadMore
                        text={`Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.`}
                        maxLength={35}
                    />
                    <ReadMore
                        text={`"Nežiūrėkite į gyvenimą pernelyg rimtai, vis tiek gyvi neišsikapstysite." [Elbert Hubbard]`}
                        maxLength={39}
                    />
                </div>
            }
            <Praktika4 />
            <TodoList />
        </div>
    );
}

export default App;
