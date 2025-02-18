const fileNotFound = 'notFound';
const multipleParamsError = 'paramsError';

const generateOneSvg = (nameSvg: string[], file: { [key: string]: string }): string => {
  if (nameSvg.length > 1) {
    return file[multipleParamsError] || '';
  }

  const defaultStatusError = file[fileNotFound] || '';
  const data = file[nameSvg[0]] || defaultStatusError;

  return `
    <svg viewBox="0 0" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${data}
    </svg>
  `;
};

export { generateOneSvg };
