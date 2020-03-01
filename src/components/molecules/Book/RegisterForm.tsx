import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@/components/atoms/UI';

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
  const { values, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    },
    validationSchema
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          error={errors.name != null}
          id="name"
          label="Name"
          defaultValue={values.name}
          helperText={errors.name}
        />
      </div>
      <div>
        <TextField
          error={errors.type != null}
          id="type"
          label="Type"
          defaultValue={values.type}
          helperText={errors.type}
        />
      </div>
      <div>
        <TextField
          error={errors.link != null}
          id="link"
          label="link"
          defaultValue={values.link}
          helperText={errors.link}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
