import React from "react";
import styled from "styled-components";
import { Text, Label } from "components/atoms";
import { Column } from "types";

type RowProps<T> = {
  item: T;
  columns: Column[];
  rowActions: (item: T) => React.ReactElement;
};

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  padding: 32px 0;
  gap: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  .column {
    display: flex;
    flex-flow: column;
  }

  .actions {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 16px;
  }
`;

const StyledTable = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const Row = <T extends object>({ item, columns, rowActions }: RowProps<T>) => {
  return (
    <StyledRow>
      {columns.map((column: Column) => (
        <div key={column.key} className="column">
          <Label>{column.title}</Label>
          {column?.render ? (
            column.render(item)
          ) : (
            <Text>
              <>{item[column.key as keyof T]}</>
            </Text>
          )}
        </div>
      ))}
      <div className="actions">{rowActions(item)}</div>
    </StyledRow>
  );
};

type Props<T> = {
  data: T[];
  columns: Column[];
  rowKey: string;
  rowActions: (item: T) => React.ReactElement;
};

export const Table = <T extends object>({
  data,
  columns,
  rowKey,
  rowActions,
}: Props<T>) => {
  return (
    <StyledTable>
      {data.map((d: T) => (
        <Row
          key={String(d[rowKey as keyof T])}
          columns={columns}
          item={d}
          rowActions={rowActions}
        />
      ))}
    </StyledTable>
  );
};
