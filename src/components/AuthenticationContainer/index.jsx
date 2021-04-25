import React from 'react';
import * as Styles from './styled';
import component from '../../assets/component.png'
import Divider from "../Divider";
import Button from "../Button";
import googleLogo from "../../assets/Google__G__Logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const AuthenticationContainer = ({title, form, footer}) => {


  return (
    <Styles.Container>
      <Styles.ContainerSlider>
        <Styles.SliderContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay
          dynamicHeight={true}
          transitionTime={2}
          width={"auto"}
        >
          <img src={component} alt={"Img carousel"}/>
          <img src={component} alt={"Img carousel"}/>
          <img src={component} alt={"Img carousel"}/>
          <img src={component} alt={"Img carousel"}/>
        </Carousel>
        </Styles.SliderContainer>
        <Styles.Title>
          Marcenas mattis egestas
        </Styles.Title>
        <Styles.Paragraph>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
        </Styles.Paragraph>
      </Styles.ContainerSlider>

      <Styles.ContainerForm>

        <Styles.FormContent>
          <Styles.ForTitle>
            {title}
          </Styles.ForTitle>
          {form}
        </Styles.FormContent>

        <Divider text="Or"/>

        <Button text="Sign in with Google" icon={googleLogo} bgColor={true}/>
        <Styles.Footer>
          {footer}
        </Styles.Footer>
      </Styles.ContainerForm>
    </Styles.Container>
  );
};

export default AuthenticationContainer;