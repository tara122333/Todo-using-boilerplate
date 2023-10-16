import React, { useCallback, useEffect, useState } from 'react';
import './addtaskmodal.component.scss'
import { RxCross2 } from 'react-icons/rx'
import { AccessService } from '../../services';
import { ToastContainer, toast } from 'react-toastify';

import AddList from '../addlist/addlist.component';

export default function AddTaskModal({ isOpen, setIsOpen, id = "", type = "create" }): React.ReactElement {

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


    const handleTask = (e) => {
        setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");


    const getTaskData = useCallback(async () => {
        try {

            const response = await accessService.getTask(accountId, token, id);
            if (response.data) {
                setTask({
                    name: response.data.name,
                    date: response.data.date,
                    time: response.data.time,
                    list: response.data.list,
                    status: response.data.status,
                })
            }

        } catch (err) {
            toast.error("something went wrong!");
        }
    }, [
        accountId,
        token
    ]);


    useEffect(() => {
        getAllLists();
    }, [listToggel])


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
        accountId,
        token,
        id,
        type
    ]);

    useEffect(() => {
        if (id != "" && type === "edit") {
            getTaskData();
        }
    }, [id, type]);

    const addTask = async () => {
        try {
            // if (type === "edit" && id != "") {

            // } else {

            // }
            if (type === "create") {
                if (task.name.length <= 0) {
                    toast.error("task name is required!");
                }
                else {
                    const response = await accessService.createTask(accountId, token, task.name, task.date, task.time, task.list);
                    if (response.data) {
                        toast.success("task added!");
                        setTask({
                            name: "",
                            date: "",
                            time: "",
                            list: "",
                            status: "false"
                        });
                        setIsOpen(false);
                    }
                }
            }

        } catch (err) {
            toast.error("something went wrong!");
        }
    };

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
                                listToggel && <AddList setListToggel={setListToggel} />
                            }

                        </div>

                        <button
                            onClick={addTask}
                            className="task-button primary-btn"
                        >Submit
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
}
