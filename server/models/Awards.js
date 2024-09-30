const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Awards = sequelize.define('Awards', {
    
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
  awarded_by: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Awards;
