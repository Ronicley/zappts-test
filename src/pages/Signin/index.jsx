import React from 'react';
import * as Styles from './styled';
import AuthenticationContainer from "../../components/AuthenticationContainer"
import Button from "../../components/Button";
import {TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {Formik} from 'formik';

const SignIn = () => {
  const history = useHistory();
  return (
    <AuthenticationContainer
      title="Welcome to Invision"
      form={
        <>
          <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth={true}
                  label="Users name or Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <TextField
                  fullWidth={true}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <Styles.ForgotPassword>
                  Forgot password?
                </Styles.ForgotPassword>
                <Styles.FormAction>
                  <Button text="Sign in"/>
                </Styles.FormAction>
              </form>
            )}
          </Formik>
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
