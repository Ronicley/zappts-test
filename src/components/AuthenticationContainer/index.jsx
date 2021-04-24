import React from 'react';
import * as Styles from './styled';
import component from '../../assets/component.png'
import Divider from "../Divider";
import Button from "../Button";
import googleLogo from "../../assets/Google__G__Logo.svg"

const AuthenticationContainer = () => {
  return (
    <Styles.Container>
      <Styles.ContainerSlider>
        <img src={component} alt="Banner alt" width="705" height="555"/>
        <Styles.Title>
          Marcenas mattis egestas
        </Styles.Title>
        <Styles.Paragraph>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
        </Styles.Paragraph>
      </Styles.ContainerSlider>

      <Styles.ContainerForm>
        <Styles.PageDescription>
          Invision
        </Styles.PageDescription>

        <Styles.FormContent>
          <Styles.ForTitle>
            Welcome to Invision
          </Styles.ForTitle>
          <label>
            aaaa
          </label>
          <input/>

          <label>
            aaaa
          </label>
          <input/>

          <label>
            aaaa
          </label>
          <input/>
          <Styles.FormAction>
            <Button text="Sign in"/>
          </Styles.FormAction>
          <Divider text="Or"/>
          <Button text="Sign in with Google" icon={googleLogo} bgColor={true}/>
        </Styles.FormContent>

      </Styles.ContainerForm>
    </Styles.Container>
  );
};

export default AuthenticationContainer;