import React from 'react';
import * as Styles from './styled';
import AuthenticationContainer from "../../components/AuthenticationContainer"

const SignIn = () => {
  return (
    <AuthenticationContainer>
      <Styles.PageTitle>
        Login
      </Styles.PageTitle>
    </AuthenticationContainer>
  )
};

export default SignIn;
