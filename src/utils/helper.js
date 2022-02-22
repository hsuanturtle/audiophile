//BACK TO THE TOP OF THE PAGE
export const topFunction = () => {
  document.documentElement.scrollTop = 0;
};

//CHECK IF THE EMAIL IS VALIDATE
export const validateEmail = (input) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  }
  return false;
};

//CHECK IF ZIP IS VALIDATE
export const validateZip = (input) => {
  const validRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (input.match(validRegex)) {
    return true;
  }
  return false;
};
