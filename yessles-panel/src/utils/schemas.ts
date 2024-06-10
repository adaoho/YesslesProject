import * as Yup from "yup";

const getErrorText = (message: string) => {
  return Yup.string().required(message);
};

const getEmailValidationSchema = (message: string) => {
  return Yup.string()
    .required(message)
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@yessles\.id$/,
      'Email must be in the format "name@yessles.id"'
    );
};

// const getErrorNumber = (message: string) => {
//   return Yup.number().required(message);
// };

export const userLoginSchema = Yup.object().shape({
  email: getErrorText(`Email Tidak Boleh Kosong`),
  password: getErrorText(`Password Tidak Boleh Kosong`),
});

export const userRegisterSchema = Yup.object().shape({
  full_name: getErrorText(`Nama Lengkap Tidak Boleh Kosong`),
  email: getEmailValidationSchema(`Email Tidak Boleh Kosong`),
  password: getErrorText(`Password Tidak Boleh Kosong`),
});

export const changeStatusSchema = Yup.object().shape({
  status: getErrorText(`Status Tidak Boleh Kosong`),
});
