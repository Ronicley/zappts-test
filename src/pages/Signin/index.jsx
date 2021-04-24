import React from 'react';
import * as Styles from './styled';
import AuthenticationContainer from "../../components/AuthenticationContainer"
import Button from "../../components/Button";
import {TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  return (
    <AuthenticationContainer
      title="Welcome to Invision"
      form={
        <>
          <TextField
            fullWidth={true}
            id="satandard-basic"
            label="Users name or Email"
          />
          <TextField
            fullWidth={true}
            id="standard-basic"
            label="Password"
            type="password"
          />
        </>
      }
      actions={
        <>
          <Button text="Sign in" />
        </>
      }
      footer={
        <>
          <Styles.Span>
            New <b>Invision</b>?
          </Styles.Span>&nbsp;
          <Styles.CreateAccountLink onClick={() => history.push("/signup")}>
            <u>Create Account</u>
          </Styles.CreateAccountLink>
        </>
      }
    />
  )
};

export default SignIn;
