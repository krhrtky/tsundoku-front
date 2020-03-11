import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, DialogActions } from '@/components/atoms/UI';
import { useBooksContext } from '@/components/context';
import { Book, Link, Name, Type } from '@/model/Book';
import { Id } from '@/model/User';

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
  const [BookContext] = useBooksContext();
  const { action } = useContext(BookContext);

  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    onSubmit: values => {
      action.register(
        Book.stock(
          new Name(values.name),
          Type.Kindle,
          new Link(values.link),
          new Id('')
        )
      );
    },
    validationSchema
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          fullWidth={true}
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
          fullWidth={true}
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
          fullWidth={true}
          error={errors.link != null}
          id="link"
          label="Link"
          value={values.link}
          helperText={errors.link}
          onChange={handleChange}
        />
      </div>
      <DialogActions>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </DialogActions>
    </form>
  );
};
