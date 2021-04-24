import React from "react";
import * as Styles from './styled'

const Divider = ({text}) => {
  return (
    <Styles.Container>
      <Styles.LeftBar/>
      <Styles.Text>
        {text}
      </Styles.Text>
      <Styles.RightBar/>
    </Styles.Container>
  )
}

export default Divider;