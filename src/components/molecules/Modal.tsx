import { useRef } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.25s ease;
  background-color: rgba(2, 42, 59, 0.8);
  z-index: 99;

  .modal {
    min-width: 250px;
    min-height: 250px;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
    background: white;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 32px 32px 0px 32px;

      button {
        width: 30px;
        height: 30px;
        background: white;
        padding: 0;
        margin: 0;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        i {
          font-size: 20px;
          color: #aaa;
        }

        :hover {
          background: #eee;
        }
      }
    }

    .body {
      padding: 0 32px;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      padding: 24px;
      margin-top: 32px;
      border-top: 1px solid #ddd;
      gap: 16px;
    }
  }
`;

const StyledTitle = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: black;
`;

type Props = {
  show: boolean;
  title: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  closeModal?: () => void;
};

export const Modal = ({ show, title, body, footer, closeModal }: Props) => {
  const ref = useRef(null);

  if (!show) return <></>;

  return (
    <StyledContainer ref={ref}>
      <div className="modal">
        <div className="header">
          <StyledTitle>{title}</StyledTitle>
          <button onClick={() => closeModal?.()}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </StyledContainer>
  );
};
