const app = require('./app');
const sequelize = require('./config/database');

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
