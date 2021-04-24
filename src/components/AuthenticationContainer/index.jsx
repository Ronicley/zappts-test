import React from 'react';
import * as Styles from './styled';
import component from '../../assets/component.png'
import Divider from "../Divider";
import Button from "../Button";
import googleLogo from "../../assets/Google__G__Logo.svg"
import SimpleImageSlider from "react-simple-image-slider";


const AuthenticationContainer = ({title, form, footer}) => {
  const images = [
    {url: component},
    {url: component},
    {url: component},
    {url: component},
  ];

  return (
    <Styles.Container>
      <Styles.ContainerSlider>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets
          bgColor={"transparent"}
          slideDuration={1}
          showNavs
        />
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