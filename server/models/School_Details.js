const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const School_Details = sequelize.define('School_Details', {
  app_number: {
    type: DataTypes.STRING,
    references: {
        model: application,
        key: 'app_number'
      }
  },
  school_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  std: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  school: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cgpa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  division: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = School_Details;
