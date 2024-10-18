// backend/models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password@db:5432/mydb'); // Adjust your connection string

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 100],
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = User;
