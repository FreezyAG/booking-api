const a = {
  development: {
    host: process.env.DB_HOST,
      username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
  },
  test: {
    host: process.env.DB_HOST,
      username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
  },
  production: {
    host: process.env.DB_HOST,
      username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
  }
};

export default a
