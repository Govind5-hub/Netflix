export const checkValidData = (name, email, password) => {
  const errors = [];
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) errors.push("Email ID is not valid");
  if (!isPasswordValid) errors.push("Password is not valid");

  return errors.length === 0 ? null : errors;
};
