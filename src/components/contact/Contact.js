import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion as m } from "framer-motion";
import { Form, Button } from "react-bootstrap";

import "./style.css"

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter a name").max(40, "There is a max of 40 characters"),
      email: Yup.string()
        .email("invalid email address!")
        .required("Please enter an email"),
      comment: Yup.string().required("Please leave a comment").max(300, "There is a max of 300 characters"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
    <h1>Contact Me</h1>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className={`${formik.errors.name ? "error" : "normal"}`}>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Name"}
          </label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email@Email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className={`${formik.errors.email ? "error" : "normal"}`}>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email"}
          </label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="comment-box"
          />
          <label className={`${formik.errors.comment ? "error" : "normal"}`}>
            {formik.touched.comment && formik.errors.comment
              ? formik.errors.comment
              : "Comment"}
          </label>
        </Form.Floating>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </m.div>
  );
}

export default Contact;
