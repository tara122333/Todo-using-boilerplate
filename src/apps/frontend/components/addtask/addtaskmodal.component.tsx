import React from 'react';
import './addtaskmodal.component.scss'
import { RxCross2 } from 'react-icons/rx'

export default function AddTaskModal({ isOpen, setIsOpen }): React.ReactElement {
    console.log(isOpen, setIsOpen)
    return (
        <div className='add-task-modal'>
            <div className='add-task-modal-box'>
                <span className='cross-btn' onClick={() => { setIsOpen(false) }}>
                    <h3>Add Task</h3>
                    <RxCross2 />
                </span>
                <div>
                    <form className="task-form">
                        <div className="task-form-group">
                            <label htmlFor="name">What is to be done?</label>
                            <input className="input-box"
                                type="text"
                                id="name"
                                name="name"
                                // onChange={handleTask}
                                // value={task.name}
                                placeholder="Enter Task Here.."
                            />
                        </div>
                        <div className="task-form-group">
                            <label htmlFor="date">Due date</label>
                            <input className="input-box"
                                type="date"
                                id="date"
                                name="date"
                            // value={task.date}
                            // onChange={handleTask}
                            />
                        </div>
                        <div className="task-form-group">
                            <label htmlFor="time">Due Time</label>
                            <input className="input-box"
                                type="time"
                                id="time"
                                name="time"
                            // value={task.time}
                            // onChange={handleTask}
                            />
                        </div>

                        {
                            <div className="task-form-group">
                                <label htmlFor="time">Task Status</label>
                                <select
                                    className="input-box"
                                    // value={task.status}
                                    // onChange={handleTask}
                                    name="status"
                                >
                                    {/* <option value={true}>Completed</option>
                                    <option value={false}>Not Completed</option> */}
                                </select>
                            </div>
                        }


                        <div className="task-form-group">
                            <label htmlFor="time">Add to list</label>
                            <div className='add-list-box'>
                                {/* <select
                                    value={task.list}
                                    onChange={handleTask}
                                    name="list"
                                    required
                                >
                                    {
                                        listData && listData?.map((item) => (
                                            <>
                                                <option value={item}>{item}</option>
                                            </>
                                        ))
                                    }
                                </select> */}
                                {
                                    !true ? (
                                        <>
                                            <button className='btn'
                                            // onClick={() => setListToggel(true)}
                                            >
                                                Add List
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='red-btn'
                                            // onClick={() => setListToggel(false)}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        <form className='add-list-section'>
                            <div className="task-form-group">

                                <label htmlFor="list">Add New List</label>
                                <div className='add-list'>
                                    <input className="input-box task-input-box"
                                        type="text"
                                        id="list"
                                        name="list"
                                        // onChange={(e) => setList(e.target.value)}
                                        // value={list}
                                        placeholder="Enter List Name"
                                    />
                                    <button className='secondry-btn'
                                    // onClick={addNewList}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>

                        <button
                            // onClick={addTask}
                            className="task-button primary-btn"
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}
