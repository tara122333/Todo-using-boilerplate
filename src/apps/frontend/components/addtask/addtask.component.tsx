import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi'
import './addtask.component.scss';
import AddTaskModal from './addtaskmodal.component';

export default function Addtask(): React.ReactElement {
    const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

    const openTaskModal = () => {
        setIsOpenTaskModal(true);
    }
    return (
        <div className='addtask'>
            <button className='primary-btn' onClick={openTaskModal}>
                <BiPlus className='plus-icon' />
                Add Task
            </button>
            {
                isOpenTaskModal && <AddTaskModal isOpen={isOpenTaskModal} setIsOpen={setIsOpenTaskModal} />
            }
        </div>
    );
}
