import React, { useCallback, useEffect, useState } from 'react';
import { AccessService } from '../../services';
import './tasks.component.scss'
import TaskDesign from './taskdesign.component';

export default function Tasks(): React.ReactElement {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [tasks, setTasks] = useState([]);
    const accessService = new AccessService();

    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");
    const getAllTasks = useCallback(async () => {
        setSuccess(false);
        setError(false);
        try {
            const response = await accessService.getAllTasks(accountId, token);
            if (response.data.length > 0) {
                setTasks(response.data);
            }
        } catch (err) {
            setError(true);
        }
    }, [
        token, accountId, tasks
    ]);

    useEffect(() => {
        getAllTasks();
    }, [])

    return (
        <>
            {success ? <h2 id='success'>SUCCESS!</h2> : null}
            {error ? <h2 id='error'>ERROR!</h2> : null}
            <h2>All task here!!!</h2>
            <h1>Table</h1>

            <div className='tasks-display-box'>
                {
                    tasks.map((items) => (
                        <div key={items.id}>
                            <TaskDesign {...items} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
