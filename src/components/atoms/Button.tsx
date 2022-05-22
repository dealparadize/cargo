import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/colors";

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  secondary?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  max-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: ${(props) => {
    if (props.primary) return COLORS.primary;
    if (props.secondary) return COLORS.secondary;
    return COLORS.primary;
  }};
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: ${(props) => {
      if (props.primary) return "#36816a";
      if (props.secondary) return "#eee";
      return "#36816a";
    }};
  }

  /**
  * Font style
  */
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => {
      if (props.primary) return COLORS.white;
      if (props.secondary) return COLORS.black;
      return COLORS.white;
    }};
  }

  i {
    font-size: 12px;
    color: ${(props) => {
      if (props.primary) return "#aaa";
      if (props.secondary) return "rgba(0, 0, 0, 0.25)";
      return "#aaa";
    }};
  }
`;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    children: React.ReactNode;
    icon?: string;
    onClick?: () => void;
  };

export const Button: React.FC<Props> = ({
  children,
  icon,
  onClick,
  ...props
}: Props) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      <span>{children}</span>
      {icon && <i className={icon} />}
    </StyledButton>
  );
};
