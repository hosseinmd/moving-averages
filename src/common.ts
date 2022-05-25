export const isNumber = (subject: any): subject is number => {
  return (
    typeof subject === "number" &&
    // is not NaN: `NaN === NaN` => `false`
    subject === subject
  );
};

export const isArray = Array.isArray;
