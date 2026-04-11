const users = {
  invalidUser: {
    username: process.env.INVALID_USERNAME,
    password: process.env.INVALID_PASSWORD,
  },
  validUser: {
    username: process.env.VALID_USERNAME,
    password: process.env.VALID_PASSWORD,
  },
};

module.exports = users;