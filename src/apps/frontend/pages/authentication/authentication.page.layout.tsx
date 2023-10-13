import React, { PropsWithChildren } from 'react';
import './authentication.page.layout.scss';
const AuthenticationPageLayout: React.FC<PropsWithChildren> = ({
    children,
}) => (
    <div className='authentication-page-layout'>
        <div className='authentication-page-layout-img-section'>
            <img src='https://i.ibb.co/bzvtH2c/2842680.jpg' alt='form-page' style={{width : "100%", height : "100%"}} />
        </div>
        <div className='authentication-page-layout-form-section'>
        {
            children
        }
        </div>
    </div>
);

export default AuthenticationPageLayout;