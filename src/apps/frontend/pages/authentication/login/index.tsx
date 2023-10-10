import React from 'react';
import AuthenticationPageLayout from '../authentication-page-layout';
import LoginForm from './login.page';
export default function Login(): React.ReactElement {
    return (
        <>
            <AuthenticationPageLayout>
                <LoginForm />
            </AuthenticationPageLayout>
        </>
    )
}