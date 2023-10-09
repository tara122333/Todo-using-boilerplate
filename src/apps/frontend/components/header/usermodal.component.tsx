import React from 'react';
import { PiSignOutBold } from 'react-icons/pi'
import './usermodal.component.scss'

export default function Usermodal({ isOpen, setIsOpen }): React.ReactElement {

    console.log(isOpen, setIsOpen);
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
                        <span className='heading'>Tara Kumawat</span>
                        <span className='sub-heading'>tarachand122333@gmail.com</span>
                    </div>
                </div>
                <div className='log-out-box'>
                    <PiSignOutBold className='log-out-btn-icon' />
                    <span className='log-out-btn-txt'>Sign-Out</span>
                </div>
            </div>
        </div>
    );
}
