const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Sequelize with your PostgreSQL database credentials
const sequelize = new Sequelize('postgres://username:password@postgres_db:5432/database_name');

app.use('/users', userRoutes);

// Sync database and start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    
    await sequelize.sync();
    console.log('Database synchronized.');

    app.listen(3001, () => {
      console.log('Server is running on http://localhost:3001');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
