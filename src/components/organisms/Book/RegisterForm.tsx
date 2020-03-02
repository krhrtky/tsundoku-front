import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@/components/atoms/UI';

// type Props = {
//
// }

const initialValues = {
  name: '',
  type: '',
  link: ''
};

const validationSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().required(),
  link: yup.string().notRequired()
});

export const RegisterForm: React.FC = () => {
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    },
    validationSchema
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          error={errors.name != null}
          id="name"
          label="Name"
          value={values.name}
          helperText={errors.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          error={errors.type != null}
          id="type"
          label="Type"
          value={values.type}
          helperText={errors.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          error={errors.link != null}
          id="link"
          label="Link"
          value={values.link}
          helperText={errors.link}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
