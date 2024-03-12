// MainPage.js
import React, { useState } from 'react';
import List from '../components/list/List';
import Button from '../components/button/Button';

const MainPage = () => {
    const [tasks,] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ]);

    const [showList, setShowList] = useState(false);

    const handleShow = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <Button handleShow={handleShow} />
            <List tasks={tasks} show={showList} />
        </div>
    );
};

export default MainPage;
