import styled from "styled-components";
import { Text } from "components/atoms";

const FooterText = styled(Text)`
  line-height: 19px;
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 64px 32px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>Powered by Nuvo Cargo</FooterText>
      <FooterText>Help</FooterText>
    </StyledFooter>
  );
};
