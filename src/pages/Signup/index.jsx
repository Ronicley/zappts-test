import React from 'react';
import * as Styles from './styled';
import {TextField} from "@material-ui/core";
import Button from "../../components/Button";
import AuthenticationContainer from "../../components/AuthenticationContainer";
import {useHistory} from "react-router-dom";


const SignUp = () => {
  const history = useHistory();
  return (
    <>
      <AuthenticationContainer
        title="Getting Started"
        form={
          <>
            <TextField
              fullWidth={true}
              name="fullName"
              label="Full Name"
            />
            <TextField
              fullWidth={true}

              id="satandard-basic"
              label="Users name or Email"
            />
            <TextField
              fullWidth={true}
              id="standard-basic"
              name="password"
              label="Create Password"
              type="password"
            />
          </>
        }
        actions={
          <>
            <Button text="Sign up"/>
          </>
        }
        footer={
          <Styles.TermsContainer>
            <Styles.Span>
              By signing up, you agree to <b>Invision</b>?&nbsp;<br/>
              <Styles.UnderlinedButton>Terms of Conditions </Styles.UnderlinedButton> and <Styles.UnderlinedButton>Privacy
              Policy</Styles.UnderlinedButton>
            </Styles.Span>&nbsp;
            <Styles.Span>
              Already on <b>Invision</b>?&nbsp;
              <Styles.CreateAccountLink onClick={() => history.push("/signin")}>
                <u>Log in</u>
              </Styles.CreateAccountLink>
            </Styles.Span>
          </Styles.TermsContainer>
        }
      />
    </>
  )
};

export default SignUp;
