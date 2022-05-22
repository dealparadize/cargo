import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
`;

const StyledHeaderTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const Header: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StyledHeader>
    <StyledHeaderTitle>Dronocargo</StyledHeaderTitle>
    {children}
  </StyledHeader>
);
