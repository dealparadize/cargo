import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const toggleModal = () => setShow((s) => !s);

  return {
    show,
    showModal,
    hideModal,
    toggleModal,
  };
};
