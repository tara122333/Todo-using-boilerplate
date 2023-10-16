import React, { useEffect, useCallback, useState } from 'react';
import { PiSignOutBold } from 'react-icons/pi'
import './usermodal.component.scss'
import { useNavigate } from 'react-router-dom';
import { AccessService } from '../../services';

export default function Usermodal({setIsOpen }): React.ReactElement {

    const accessService = new AccessService();
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const logout = () => {
        setIsOpen(false);
        localStorage.clear();
        navigate("/");
    }
    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("user");

    const getAccount = useCallback(async () => {
        try {
            const response = await accessService.getUsername(accountId, token);
            if (response.data.username) {
                setUsername(response.data.username);
            } else {
                setUsername("New User");
            }
        } catch (err) {
        }
    }, [
        token, accountId
    ]);

    useEffect(() => {
        getAccount();
    }, []);


    return (
        <div className='log-out-pop-up'>
            <div className="log-out-modal">
                <div className='log-out-modal-user-info'>
                    <div>
                        <span className='user-profile' id='user-profile'>
                            {username[0]}
                        </span>
                    </div>
                    <div className='user-info-text'>
                        <span className='heading'>{username}</span>
                    </div>
                </div>
                <div className='log-out-box'>
                    <div className='log-out-txt' onClick={logout}>
                        <PiSignOutBold className='log-out-btn-icon' />
                        <span className='log-out-btn-txt'>Sign-Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
