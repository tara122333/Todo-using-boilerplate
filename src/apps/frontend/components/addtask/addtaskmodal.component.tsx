import React, { useCallback, useEffect, useState } from 'react';
import './addtaskmodal.component.scss'
import { RxCross2 } from 'react-icons/rx'
import { AccessService } from '../../services';
import { toast } from 'react-toastify';

import AddList from '../addlist/addlist.component';

export default function AddTaskModal({ isOpen, setIsOpen }): React.ReactElement {

    const [lists, setLists] = useState([]);
    const [listToggel, setListToggel] = useState(false);
    const [task, setTask] = useState({
        name: "",
        date: "",
        time: "",
        list: "",
        status: "false"
    })

    const accessService = new AccessService();
    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");

    const handleTask = (e) => {
        setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const getAllLists = useCallback(async () => {

        try {
            const response = await accessService.getAllLists(accountId, token);
            if (response.data.length > 0) {
                setLists(response.data);
            }
        } catch (err) {
            toast.error("something went wrong!");
        }
    }, [
        token,
        accountId,
        lists
    ]);

    useEffect(() => {
        getAllLists();
    }, [lists, accountId, token])

    return (

        <div className='add-task-modal'>
            {
                isOpen
            }
            <div className='add-task-modal-box'>
                <span className='cross-btn' onClick={() => { setIsOpen(false) }}>
                    <h3>Add Task</h3>
                    <RxCross2 />
                </span>
                <div>
                    <div className="task-form">
                        <div className="task-form-group">
                            <label htmlFor="name">What is to be done?</label>
                            <input className="input-box"
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleTask}
                                value={task.name}
                                placeholder="Enter Task Here.."
                            />
                        </div>
                        <div className="task-form-group">
                            <label htmlFor="date">Due date</label>
                            <input className="input-box"
                                type="date"
                                id="date"
                                name="date"
                                value={task.date}
                                onChange={handleTask}
                            />
                        </div>
                        <div className="task-form-group">
                            <label htmlFor="time">Due Time</label>
                            <input className="input-box"
                                type="time"
                                id="time"
                                name="time"
                                value={task.time}
                                onChange={handleTask}
                            />
                        </div>

                        {
                            <div className="task-form-group">
                                <label htmlFor="time">Task Status</label>
                                <select
                                    className="input-box"
                                    onChange={handleTask}
                                    value={task.status}
                                    name="status"
                                >
                                    <option value={"true"}>Completed</option>
                                    <option value={"false"}>Not Completed</option>
                                </select>
                            </div>
                        }


                        <div className="task-form-group">
                            <label htmlFor="time">Add to list</label>
                            <div className='add-list-box'>
                                <select
                                    value={task.list}
                                    onChange={handleTask}
                                    name="list"
                                    className="input-box list-input-box"
                                    required
                                >
                                    {
                                        lists && lists?.map((item) => (
                                            <option value={item.list} key={item.id}>{item.list}</option>
                                        ))
                                    }
                                </select>
                                {
                                    !listToggel ? (
                                        <>
                                            <button className='secondry-btn'
                                                onClick={() => setListToggel(true)}
                                            >
                                                Add List
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='red-btn'
                                                onClick={() => setListToggel(false)}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        <div className='add-list-section'>
                            {
                                listToggel && <AddList />
                            }

                        </div>

                        <button
                            // onClick={addTask}
                            className="task-button primary-btn"
                        >Submit
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
