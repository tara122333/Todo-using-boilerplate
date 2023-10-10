import React from 'react';
import AuthenticationPageLayout from '../authentication-page-layout';
import SignupForm from './signup.page';
export default function Signup(): React.ReactElement {
    return (
        <>
            <AuthenticationPageLayout>
                <SignupForm />
            </AuthenticationPageLayout>
        </>
    )
}