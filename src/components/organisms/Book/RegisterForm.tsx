import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { fold } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';
import {
  Button,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@/components/atoms/UI';
import { InMemoryRegister } from '@/usecase/book/Register';
import { Types } from '@/model/Book';
import { InMemoryLoadData } from '@/usecase/user/LoadLocalData';

const selectableType = Object.values(Types);

const initialValues = {
  name: '',
  type: selectableType[0],
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

const inMemoryLoadData = new InMemoryLoadData();

export const RegisterForm: React.FC<Props> = ({
  submitCallback = null
}: Props) => {
  const register = new InMemoryRegister();
  const user = inMemoryLoadData.handle();
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    onSubmit: ({ name, type, link }) => {
      pipe(
        register.execute({
          name,
          status: 'Stock',
          type,
          link,
          userId: user.id
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
        <FormControl>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            id="type"
            labelId="type-label"
            label="Type"
            autoWidth={true}
            value={values.type}
            onChange={handleChange}
          >
            {selectableType.map(value => (
              <MenuItem key={value.toLowerCase()} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
