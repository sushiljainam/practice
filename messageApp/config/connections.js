module.exports.connections = {
  mongo: {
     adapter: 'sails-mongo',
     url: process.env.MONGO_URL || 'mongodb://localhost/messageApp'
  }
};
