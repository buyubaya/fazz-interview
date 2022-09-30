const separator = '-';

export const renderWithFallback = (fallbackValue = separator) => {
  return (value: string | number) => {
    return value || fallbackValue;
  };
};
