const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://root:hgc16711@8.134.49.87:27017/calendar',
  port: process.env.PORT || 8000,
  language: 'cn',
};

export default config;
