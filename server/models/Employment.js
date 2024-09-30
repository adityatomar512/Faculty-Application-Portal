const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Employment = sequelize.define('Employment', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  present_position: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  date_leave: {
    type: DataTypes.DATEONLY,
  },
  organisation: {
    type: DataTypes.STRING,
  },
  date_join: {
    type: DataTypes.DATEONLY,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  area_special: {
    type: DataTypes.TEXT,
  },
  current_area: {
    type: DataTypes.TEXT,
  },
  app_number: {
    type: DataTypes.STRING,
    references: {
      model: application,
      key: 'app_number'
    }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Employment;
