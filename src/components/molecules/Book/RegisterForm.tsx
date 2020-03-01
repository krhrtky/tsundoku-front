import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  status: '',
  type: '',
  link: ''
};

export const RegisterForm: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="status">Status</label>
      <input
        id="status"
        name="status"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.status}
      />
      <label htmlFor="link">Link</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.link}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
