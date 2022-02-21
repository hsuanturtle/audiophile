export const topFunction = () => {
  document.documentElement.scrollTop = 0;
};
export const validateEmail = (input) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  }
  return false;
};

export const validateZip = (input) => {
  const validRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (input.match(validRegex)) {
    return true;
  }
  return false;
};
