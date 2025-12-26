import { createContext, useContext } from "react";

const ModalContext = createContext(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("UseModal debe usarse dentro de <Modal />");
  }
  return context;
}

export { ModalContext, useModal };