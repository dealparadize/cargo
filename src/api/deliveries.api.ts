import { Delivery } from "types";
import { api } from "./api";

const instance = api();

export const getDeliveries = async () => {
  return instance.getAll();
};

export const getDelivery = async (id: string) => {
  return instance.getItem(id);
};

export const saveDelivery = async (delivery: Omit<Delivery, "id">) => {
  return instance.addItem(delivery);
};
