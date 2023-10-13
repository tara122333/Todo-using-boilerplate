import React from 'react';
import LoginForm from './login.page';
import AuthenticationPageLayout from '../authentication.page.layout';
export default function Login(): React.ReactElement {
    return (
        <>
            <AuthenticationPageLayout>
                <LoginForm />
            </AuthenticationPageLayout>
        </>
    )
}