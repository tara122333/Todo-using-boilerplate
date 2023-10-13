import React from 'react';
import SignupForm from './signup.page';
import AuthenticationPageLayout from '../authentication.page.layout';
export default function Signup(): React.ReactElement {
    return (
        <>
            <AuthenticationPageLayout>
                <SignupForm />
            </AuthenticationPageLayout>
        </>
    )
}