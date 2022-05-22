import { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "components/atoms";
import { useOutsideClick } from "hooks";

const StyledDropdown = styled.div`
  position: relative;
  .menu {
    z-index: 1;
    position: absolute;
    background: white;
    box-shadow: 0 0 6px #aaa;

    div {
      padding: 6px 12px;
      cursor: pointer;
      :hover {
        background: #eee;
      }
    }
  }
`;

type Props = {
  options?: Array<{
    onClick?: () => void;
    label?: string;
  }>;
};

export const Dropdown = ({ options }: Props) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  return (
    <StyledDropdown ref={ref}>
      <Button
        secondary
        icon="fa fa-caret-down"
        onClick={() => {
          setShow(true);
        }}
      >
        Actions
      </Button>
      {show && (
        <div className="menu">
          {options?.map((option) => (
            <div
              key={option.label}
              onClick={() => {
                setShow(false);
                option?.onClick?.();
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
};
