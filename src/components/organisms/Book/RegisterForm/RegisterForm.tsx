import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { fold } from 'fp-ts/lib/Either';
import {
  Button,
  DialogActions,
  TextField,
  FormControl,
  MenuItem,
  InputAdornment
} from '@/components/atoms/UI';
import { RegisterImpl } from '@/usecase/book/Register';
import { Types } from '@/model/Book';
import { useUser } from '@/components/hooks';

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

export const RegisterForm: React.FC<Props> = ({
  submitCallback = null
}: Props) => {
  const register = new RegisterImpl();
  const { user } = useUser();

  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: async ({ name, type, link, price }) => {
      if (user == null) {
        return;
      }
      const result = await register.execute({
        name,
        status: 'Stock',
        type,
        price,
        link,
        userId: user.id.value
      });
      fold(
        message => console.error(message),
        () => {
          if (submitCallback != null) {
            submitCallback();
          }
        }
      )(result);
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
