import css from "./Authorization.module.css";
import { useState } from "react";
import Modal from "react-modal";
import LogIn from "../LogIn/LogIn";

Modal.setAppElement("#root");

export default function Authorization() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={openModal} type="button">
        Log in
      </button>
      <button className={css.btn} type="button">
        Registration
      </button>
      <LogIn isOpen={isModalOpen} />
    </div>
  );
}
