import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import { Button, DialogActions, TextField } from '@/components/atoms/UI';
import { ImMemoryRegister } from '@/usecase/book/Register';

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

export type Props = {
  submitCallback?: (() => void) | null;
};

export const RegisterForm: React.FC<Props> = ({
  submitCallback = null
}: Props) => {
  const register = new ImMemoryRegister();
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    onSubmit: values => {
      pipe(
        register.execute({
          name: values.name,
          status: 'stock',
          type: 'kidle',
          link: '',
          userId: ''
        }),
        fold(
          message => console.error(message),
          () => {
            console.log('success');
            if (submitCallback != null) {
              submitCallback();
            }
          }
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

export default RegisterForm;
