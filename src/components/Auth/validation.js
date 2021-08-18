export const email = (value) => {
  const hasValidFormat = /^[^@\s]+@[^@\s.]+\.[^@\s.]{2,}$/g.test(value.trim());
  return hasValidFormat;
};

export const password = (value) => {
  const hasUppercase = value.search(/[A-Z]/g) < 0 ? false : true;
  const hasLowercase = value.search(/[a-z]/g) < 0 ? false : true;
  const hasNumbers = value.search(/[1-9]/g) < 0 ? false : true;
  const hasEnoughChars = value.length >= 8;
  return !!(
    hasUppercase &&
    hasLowercase &&
    hasNumbers &&
    hasEnoughChars
  );
};