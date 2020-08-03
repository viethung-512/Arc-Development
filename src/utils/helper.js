export const isValidEmail = email => {
  const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return regEx.test(email);
};

export const isValidPhone = phone => {
  const regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return regEx.test(phone);
};

export const isEmpty = string => string.trim() === '';

export const validateError = error => {
  for (const key in error) {
    if (error.hasOwnProperty(key)) {
      const element = error[key];

      if (element) {
        return true;
      }
    }

    return false;
  }
};
