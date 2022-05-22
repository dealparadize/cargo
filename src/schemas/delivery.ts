import * as Yup from "yup";

export const DeliverySchema = Yup.object().shape({
  order_id: Yup.string().required("Order id is required"),
  technician: Yup.string().required("Technician es required"),
  platform: Yup.string().required("Platform is required"),
  drone: Yup.string().required("Drone is required"),
});
