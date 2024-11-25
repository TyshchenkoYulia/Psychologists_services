import Modal from "react-modal";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { IoIosClose } from "react-icons/io";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./LogIn.module.css";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: "14px",
    maxHeight: "90vh",
    overflowY: "auto",
    scrollbarWidth: "none",
  },
};
const initialValuesFormik = {
  email: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function LogIn() {
  // const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = () => {};

  return (
    <>
      <Modal isOpen={isModalOpen} isClose={closeModal} style={modalStyles}>
        {/* <button
          className={css.closeBtn}
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <IoIosClose className={css.closeIcon} size={32} />
        </button> */}
        <Formik
          initialValues={initialValuesFormik}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <h2>Log In</h2>
            <p>
              Welcome back! Please enter your credentials to access your account
              and continue your search for a psychologist.
            </p>
            <Field
              className={css.email}
              type="text"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" />
          </Form>
        </Formik>
      </Modal>
    </>
  );
}
