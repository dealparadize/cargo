import styled from "styled-components";
import { Label } from "components/atoms";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 8px 0;

  .select-wrapper {
    display: flex;
    flex-flow: row;
    align-items: center;
    min-height: 40px;
    min-width: 240px;
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
`;

type StyledSelectProps = {
  icon: boolean;
};

const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  border: 0;
  padding: 8px ${(props) => (props.icon ? "0" : "16px")};
  :focus {
    outline: none;
  }
`;

type Option = {
  key?: string;
  value: string;
};

type Props = {
  placeholder: string;
  icon?: string;
  options?: Array<Option>;
  onChange?: (value: string) => void;
};

export const Select = ({ placeholder, icon, options, onChange }: Props) => (
  <Wrapper>
    <Label>{placeholder}</Label>
    <div className="select-wrapper">
      {icon && <i className={icon} />}
      <StyledSelect
        placeholder={placeholder}
        icon={!!icon}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      >
        {options?.map?.((opt: Option) => (
          <option value={opt.value}>{opt.key}</option>
        ))}
      </StyledSelect>
    </div>
  </Wrapper>
);
