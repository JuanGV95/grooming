export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    mongodbUri: process.env.MONGODB_URI,
    jwt: process.env.JWT_SECRET,
    cookie: process.env.COOKIE_SECRET,
    persistence: process.env.PERSISTENCE || 'memory', 
    mail: {
      emailService: process.env.EMAIL_SERVICE || 'gmail',
      emailPort: process.env.EMAIL_PORT || 587,
      emailUser: process.env.EMAIL_USER,
      emailPassword: process.env.EMAIL_PASSWORD,
    },
  };