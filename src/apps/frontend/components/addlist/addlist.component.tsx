import React, { useState, useCallback } from 'react';
import './addlist.component.scss';
import { AccessService } from '../../services';
import { ToastContainer, toast } from 'react-toastify';

export default function AddList({ setListToggel }): React.ReactElement {

    const [list, setList] = useState("");

    const accessService = new AccessService();
    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");

    const addList = useCallback(async () => {
        try {
            const response = await accessService.addList(accountId, token, list);
            if (response.data) {
                toast.success("list added success");
                setListToggel(false);
            }
            else {
                toast.error("list not added");
            }
        } catch (err) {
            toast.error("something went wrong!");
        }
    }, [
        token,
        accountId,
        list
    ]);

    return (
        <div className="task-form-group">
            <label htmlFor="list">Add New List</label>
            <div className='add-list'>
                <input className="input-box task-input-box"
                    type="text"
                    id="list"
                    name="list"
                    onChange={(e) => setList(e.target.value)}
                    value={list}
                    placeholder="Enter List Name"
                />
                <button className='secondry-btn'
                    onClick={addList}
                >
                    Save
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
