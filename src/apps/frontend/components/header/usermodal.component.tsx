import React from 'react';
import { PiSignOutBold } from 'react-icons/pi'
import './usermodal.component.scss'
import { useNavigate } from 'react-router-dom';

export default function Usermodal({ isOpen, setIsOpen }): React.ReactElement {

    const navigate = useNavigate();
    console.log(isOpen);

    const logout = () => {
        setIsOpen(false);
        localStorage.clear();
        navigate("/");
    }

    return (
        <div className='log-out-pop-up'>
            <div className="log-out-modal">
                <div className='log-out-modal-user-info'>
                    <div>
                        <span className='user-profile' id='user-profile'>
                            T
                        </span>
                    </div>
                    <div className='user-info-text'>
                        <span className='heading'>Tara Chand Kumawat</span>
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
