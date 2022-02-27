export const validationCheck = (data: any) => {
  for (const key in data) {
    if (!Boolean(data[key])) {
      return false;
    };
  }
  return true;
}