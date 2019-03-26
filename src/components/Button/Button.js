import React from "react";
import styled from "styled-components";

function Button({ className }) {
  return <div className={className} />;
}

const StyledButton = styled(Button)`
  background: #5d38db;
  padding: 1em 2em;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 20px;
  display: inline-block;

  &:hover {
    background: #8954ba;
  }
`;

export default StyledButton;
