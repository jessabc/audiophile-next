// https://stackoverflow.com/questions/74966208/next-js-typeerror-failed-to-parse-url-from-api-projects-or-error-connect-econ
// https://stackoverflow.com/questions/64792787/easiest-way-to-detect-production-or-dev-environment-in-nextjs
export const useCheckEnviroment = () => {
    let base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://examplesdsds.com"; // https://v2ds.netlify.app
  
    return base_url;
  };