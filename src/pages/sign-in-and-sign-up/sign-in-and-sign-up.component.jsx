import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'

import SignUp from '../../components/sign-up/sign-up.component';
import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss'

const SignInAndSingupPage = () => (
<div className='sign-in-and-sign-up'><SignIn />
<SignUp/>
</div>
);

export default SignInAndSingupPage;