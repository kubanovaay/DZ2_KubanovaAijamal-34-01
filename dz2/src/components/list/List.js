import React from 'react';
import './List.css';

const List = ({ tasks, show }) => {
    return (
        <ul className="list" style={{ display: show ? 'block' : 'none' }}>
            {tasks.map(task => (
                <li key={task.id} className="list-item">
                    {task.title} - {task.completed ? 'Completed' : 'Not Completed'}
                </li>
            ))}
        </ul>
    );
};

export default List;
