import { DELIVERIES } from "./mock";
import { v4 } from "uuid";

const DELIVERIES_KEY = "DELIVERIES";

export const api = () => {
  const data = localStorage.getItem(DELIVERIES_KEY);
  if (!data) localStorage.setItem(DELIVERIES_KEY, JSON.stringify(DELIVERIES));
  const items: any = data ? JSON.parse(data) : DELIVERIES;

  const persist = () => {
    localStorage.setItem(DELIVERIES_KEY, items);
  };

  const addItem = (item: any) => {
    const newItem = { id: v4, ...item };
    items.push(newItem);
    persist();
    return newItem;
  };

  const getItem = (id: string) => {
    const founded = items.find((i: any) => i.id === id);
    if (founded === -1) return undefined;
    return founded;
  };

  const getAll = () => {
    return items;
  };

  return {
    addItem,
    getItem,
    getAll,
  };
};
