import styled from "styled-components";
import { Title, Button } from "components/atoms";
import { Searchbar } from "components/molecules";

type Props = {
  search?: string;
  onSearch?: (v: string) => void;
  primaryAction: string;
  onPrimaryAction: () => void;
};

const StyledTableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 48px;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ActionsWrapper = styled(TitleWrapper)`
  justify-content: flex-end;
`;

export const TableHeader = ({
  search,
  onSearch,
  primaryAction,
  onPrimaryAction,
}: Props) => {
  return (
    <StyledTableHeader>
      <TitleWrapper>
        <Title>Delivery</Title>
        <Title semiopaque>History</Title>
      </TitleWrapper>

      <ActionsWrapper>
        {onSearch && <Searchbar value={search} onChange={onSearch} />}
        {onPrimaryAction && (
          <Button onClick={onPrimaryAction}>{primaryAction}</Button>
        )}
      </ActionsWrapper>
    </StyledTableHeader>
  );
};
