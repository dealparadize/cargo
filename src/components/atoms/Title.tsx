import styled from "styled-components";

type Props = {
  semiopaque?: boolean;
};

export const Title = styled.h2<Props>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  opacity: ${(props) => (props.semiopaque ? "0.5" : "1")};
  margin: 0;
`;
