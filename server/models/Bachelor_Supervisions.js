const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Bachelor_Supervisions = sequelize.define('Bachelor_Supervisions', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  app_number: {
    type: DataTypes.STRING,
    references: {
      model: application,
      key: 'app_number'
    }
  },
  name: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Bachelor_Supervisions;
