import React, { useCallback, useState } from 'react';
import './taskdesing.component.scss'
import { FiTrash } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi'
import { MdOutlineDone } from 'react-icons/md'
import { AccessService } from '../../services';
import { toast } from 'react-toastify';
import AddTaskModal from '../addtask/addtaskmodal.component';

export default function TaskDesign(props): React.ReactElement {

    const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

    const openTaskModal = () => {
        setIsOpenTaskModal(true);
    }

    const accessService = new AccessService();

    const editTask = () => {
        openTaskModal();
    }

    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");

    const deleteTask = useCallback(async (id) => {
        try {
            const taskname = prompt(`Enter Task name : ${props.name}`);
            if (taskname === props.name) {
                await accessService.deleteTask(accountId, token, id);
                toast.success("delete success!!");
            }
        } catch (err) {

        }
    }, [
        token, accountId
    ]);

    return (
        <>
            {
                isOpenTaskModal && <AddTaskModal isOpen={isOpenTaskModal} setIsOpen={setIsOpenTaskModal} id={props.id} type={"edit"} />
            }

            <div className='task-design-box'>
                <div className='task-design-box-info'>
                    <span className='task-status-btn'>
                        {
                            props.status === "true" ? "✅" : <span className='done-btn'>
                                <MdOutlineDone />
                            </span>

                        }
                        {props.name}
                    </span>
                </div>
                <div className='task-design-box-info'>
                    <h4 className=''>{props.date} |</h4>
                    <h4 className=''>{props.time}</h4>
                </div>
                <div className='task-design-box-info'>
                    <h4 className=''>{props.list} |</h4>
                    <h4 className=''>{props.status === "true" ? "Completed" : "Not Completed"}</h4>
                </div>
                <div className='task-op-btn'>
                    <span className='edit-btn' onClick={() => { editTask() }}>
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
