import React from 'react';
import './taskdesing.component.scss'
import { FiTrash } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi'
import { MdOutlineDone } from 'react-icons/md'

export default function TaskDesign(props): React.ReactElement {

    const editTask = (id) => {
        alert(id);
    }

    const deleteTask = (id) => {
        const taskname = prompt(`Enter Task name : ${props.name}`);
        if (taskname === props.name) {
            alert(id);
        }
    }

    return (
        <>
            <div className='task-design-box'>
                <div className='task-design-box-info'>
                    <span className='task-status-btn'>
                        <span className='done-btn'>
                            <MdOutlineDone />
                        </span>
                        {props.name}
                    </span>
                </div>
                <h4 className='task-design-box-info'>{props.date}</h4>
                <h4 className='task-design-box-info'>{props.time}</h4>
                <div className='task-op-btn'>
                    <span className='edit-btn' onClick={() => { editTask(props.id) }}>
                        <BiPencil />
                    </span>
                    <span className='trash-btn' onClick={() => { deleteTask(props.id) }}>
                        <FiTrash />
                    </span>
                </div>
            </div>
        </>
    );
}
