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
  MenuItem,
  InputAdornment
} from '@/components/atoms/UI';
import { InMemoryRegister } from '@/usecase/book/Register';
import { Types } from '@/model/Book';
import { InMemoryLoadData } from '@/usecase/user/LoadLocalData';

const selectableType = Object.values(Types);

const initialValues = {
  name: '',
  type: selectableType[0],
  price: 0,
  link: ''
};

const validationSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().required(),
  link: yup
    .string()
    .url()
    .notRequired()
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
    validateOnChange: false,
    onSubmit: ({ name, type, link, price }) => {
      console.log(type);
      pipe(
        register.execute({
          name,
          status: 'Stock',
          type,
          price,
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
      <FormControl fullWidth>
        <TextField
          fullWidth
          error={errors.name != null}
          id="name"
          label="Name"
          value={values.name}
          helperText={errors.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          select
          name="type"
          label="Type"
          value={values.type}
          fullWidth
          onChange={handleChange}
        >
          {selectableType.map(value => (
            <MenuItem id="type" key={value.toLowerCase()} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          fullWidth
          error={errors.price != null}
          id="price"
          label="Price"
          value={values.price}
          helperText={errors.price}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">&yen;</InputAdornment>
            )
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          fullWidth
          error={errors.link != null}
          id="link"
          label="Link"
          value={values.link}
          helperText={errors.link}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </FormControl>
      <DialogActions>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </DialogActions>
    </form>
  );
};

export default RegisterForm;
