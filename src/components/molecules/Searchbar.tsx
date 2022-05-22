import styled from "styled-components";

const StyledSearchbar = styled.div`
  min-width: 200px;
  min-height: 40px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Icon = styled.i`
  margin: 11px 11px 11px 19px;
  color: rgba(0, 0, 0, 0.25);
`;

const Input = styled.input`
  font-size: 16px;
  border: 0;
  color: #000;
  ::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
  :focus {
    outline: none;
  }
`;

type Props = {
  value?: string;
  onChange?: (v: string) => void;
};

export const Searchbar = ({ value, onChange }: Props) => {
  return (
    <StyledSearchbar>
      <Icon className="fa fa-search" />
      <Input
        value={value}
        placeholder="Search"
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      />
    </StyledSearchbar>
  );
};
