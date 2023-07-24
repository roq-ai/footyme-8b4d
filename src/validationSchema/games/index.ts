import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  date: yup.date().required(),
  location: yup.string().required(),
  league_id: yup.string().nullable(),
});
