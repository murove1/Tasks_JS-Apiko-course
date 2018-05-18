const config = {
  devBuild: (process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development',
  api_url: 'https://ask-apiko-api-yurakruhlyk.herokuapp.com',
};

export default config;
