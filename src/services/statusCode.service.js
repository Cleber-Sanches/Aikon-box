const fileNotFound = '400';
const multipleParamsIcon = 'multiParamsIcon';

const generateStatusCode = (nameStatusCodes, statusCodes) => {
  if (nameStatusCodes.length > 1) {
    return statusCodes[multipleParamsIcon] || '';
  }

  const defaultStatusError = statusCodes[fileNotFound] || '';
  const statusCode = statusCodes[nameStatusCodes[0]] || defaultStatusError;

  return `
    <svg viewBox="0 0" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${statusCode}
    </svg>
  `;
};

module.exports = {
  generateStatusCode,
};
