import React, { useCallback, useEffect, useState } from 'react';
import { AccessService } from '../../services';
import './tasks.component.scss'
import TaskDesign from './taskdesign.component';

export default function Tasks(): React.ReactElement {
    const [tasks, setTasks] = useState([]);
    const accessService = new AccessService();

    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");
    const getAllTasks = useCallback(async () => {
        try {
            const response = await accessService.getAllTasks(accountId, token);
            if (response.data.length > 0) {
                setTasks(response.data);
            }
        } catch (err) {
            
        }
    }, [
        token, accountId, tasks
    ]);

    useEffect(() => {
        getAllTasks();
    }, [])

    return (
        <>
            <div className='tasks-display-box'>
                {
                    tasks.length > 0 ?  tasks.map((items) => (
                        <div key={items.id}>
                            <TaskDesign {...items} />
                        </div>
                    )): <h2>No Task!</h2>
                }
            </div>
        </>
    );
}
