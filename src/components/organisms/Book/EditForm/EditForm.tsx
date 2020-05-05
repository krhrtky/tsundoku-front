import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  DialogActions,
  FormControl,
  InputAdornment,
  MenuItem,
  TextField
} from '@/components/atoms/UI';
import { Type, Types, Status, Statuses } from '@/model/Book';

const selectableType = Object.values(Types);
const selectableStatus = Object.values(Statuses);

type InitialValues = {
  name: string;
  type: Type;
  status: Status;
  price: number;
  totalPages: number;
  link: string;
};

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required(),
  type: yup.mixed<Type>().oneOf(selectableType),
  status: yup.mixed<Status>().oneOf(selectableStatus),
  price: yup
    .number()
    .min(1)
    .required(),
  totalPages: yup
    .number()
    .min(1)
    .required(),
  link: yup
    .string()
    .url()
    .notRequired()
});

type Props = {
  initialValues: InitialValues;
  submitCallback: (values: InitialValues) => void;
};

export const EditForm: React.FC<Props> = ({
  initialValues,
  submitCallback
}: Props) => {
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: values => {
      submitCallback(values);
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
            <MenuItem key={value.toLowerCase()} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          select
          name="status"
          label="Status"
          value={values.status}
          fullWidth
          onChange={handleChange}
        >
          {selectableStatus.map(value => (
            <MenuItem key={value.toLowerCase()} value={value}>
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
          error={errors.totalPages != null}
          id="totalPages"
          label="TotalPages"
          value={values.totalPages}
          helperText={errors.totalPages}
          onChange={handleChange}
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
