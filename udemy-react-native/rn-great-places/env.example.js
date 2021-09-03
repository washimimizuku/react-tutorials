const variables = {
  development: {
    googleApiKey: 'YOUR_GOOGLE_API_KEY',
  },
  production: {
    googleApiKey: 'YOUR_GOOGLE_API_KEY',
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the
