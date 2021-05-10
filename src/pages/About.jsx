
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';
import React from "react";

const styles = css`
  color: red;
`;

const StyledComponent = styled.div`
 color:blue;
`;

const About = () => {
  console.log("About Page Render");

  return (
    <div>
  <div css={styles}>Hi From Abo
  ut</div>
  <StyledComponent>
    blue text
  </StyledComponent>
  </div>

  )
};

export default About;