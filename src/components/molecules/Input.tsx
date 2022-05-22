import styled from "styled-components";
import { Label } from "components/atoms";
import { Field } from "formik";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 8px 0;

  .input-wrapper {
    min-width: 240px;
    display: flex;
    flex-flow: row;
    align-items: center;
    min-height: 40px;
    margin: 8px 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    i {
      margin: 11px;
      color: rgba(0, 0, 0, 0.25);
    }
  }

  .errors {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: red;
  }
`;

type StyledInputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  icon: boolean;
};

const StyledInput = styled(Field)<StyledInputProps>`
  width: 100%;
  border: 0;
  padding: 8px ${(props) => (props.icon ? "0" : "16px")};
  ::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
  :focus {
    outline: none;
  }
`;

type Props = React.ButtonHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  icon?: string;
  errors?: string;
};

export const Input = ({ placeholder, icon, errors, ...props }: Props) => (
  <Wrapper>
    <Label>{placeholder}</Label>
    <div className="input-wrapper">
      {icon && <i className={icon} />}
      <StyledInput
        placeholder={placeholder}
        icon={!!icon}
        {...props}
      ></StyledInput>
    </div>
    {errors && <div className="errors">{errors}</div>}
  </Wrapper>
);
