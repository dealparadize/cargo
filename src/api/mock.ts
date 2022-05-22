import { v4 } from "uuid";

export const PLATFORMS = [
  {
    id: 1,
    platform: "Alpha",
  },
  {
    id: 2,
    platform: "Beta",
  },
  {
    id: 3,
    platform: "Gamma",
  },
  {
    id: 4,
    platform: "Tetha",
  },
];

export const DRONES = [
  {
    id: 1,
    drone: "DJI-001Q",
  },
  {
    id: 2,
    drone: "DJI-002Q",
  },
  {
    id: 3,
    drone: "DJI-003Q",
  },
  {
    id: 4,
    drone: "DJI-004Q",
  },
];

export const DELIVERIES = [
  {
    id: v4(),
    status: "ready",
    order_id: "009-300FCT",
    technician: "Ben Santana",
    platform: "Gamma",
    drone: "DJI-002Q",
    technical_check: "passed",
  },
  {
    id: v4(),
    status: "ready",
    order_id: "009-3001CT",
    technician: "Juan Reynosa",
    platform: "Gamma",
    drone: "DJI-004Q",
    technical_check: "passed",
  },
  {
    id: v4(),
    status: "ready",
    order_id: "009-302FCT",
    technician: "Gerardo Torres",
    platform: "Gamma",
    drone: "DJI-001Q",
    technical_check: "passed",
  },
  {
    id: v4(),
    status: "ready",
    order_id: "009-303FCT",
    technician: "Alejandro Casillas",
    platform: "Gamma",
    drone: "DJI-003Q",
    technical_check: "passed",
  },
  {
    id: v4(),
    status: "ready",
    order_id: "009-304FCT",
    technician: "Jessica Salinas",
    platform: "Gamma",
    drone: "DJI-004Q",
    technical_check: "passed",
  },
];
