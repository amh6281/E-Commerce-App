import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Event = () => {
  return <Container>50% 할인</Container>;
};

export default Event;
