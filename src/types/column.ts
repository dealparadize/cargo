import React from "react";

export type Column = {
  title: string;
  key: string;
  render?: <T extends object>(
    item: T
  ) => React.ReactElement | React.ReactElement[];
};
