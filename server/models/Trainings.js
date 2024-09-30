const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Trainings = sequelize.define('Trainings', {
    
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
  type: {
    type: DataTypes.STRING,
  },
  organisation: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Trainings;
