import React from 'react';
import * as Styles from './styled';
import {TextField} from "@material-ui/core";
import Button from "../../components/Button";
import AuthenticationContainer from "../../components/AuthenticationContainer";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";


const SignUp = () => {
  const history = useHistory();
  return (
    <>
      <AuthenticationContainer
        title="Getting Started"
        form={
          <>
            <Formik
              initialValues={{fullName: '', email: '', password: ''}}

              validate={values => {
                const errors = {};
                const defaultErrorMessage = 'Este campo não pode ser vazio';

                if (!values.email) {
                  errors.email = defaultErrorMessage;

                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'O e-mail está incorreto';

                } else if (!values.password) {
                  errors.password = defaultErrorMessage;

                } else if (values.password.length <=5) {
                  errors.password = "A senha não pode ter menos de 6 caracteres";

                } else if (!values.fullName) {
                  errors.fullName = defaultErrorMessage;
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
                <Styles.Form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth={true}
                    label="Full Name"
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    error={!!errors.fullName}
                    helperText={errors.fullName && touched.fullName && errors.fullName}
                  />
                  <TextField
                    fullWidth={true}
                    label="Users name or Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={!!errors.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                  <TextField
                    fullWidth={true}
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={!!errors.password}
                    helperText={errors.password && touched.password && errors.password}
                  />
                  <Styles.FormAction>
                    <Button text="Sign up" type="submit" disabled={isSubmitting}/>
                  </Styles.FormAction>
                </Styles.Form>
              )}
            </Formik>
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
