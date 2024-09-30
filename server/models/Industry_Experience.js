const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employment = require('./Employment');

const Industry_Experience = sequelize.define('Industry_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  organisation: {
    type: DataTypes.STRING,
  },
  work_profile: {
    type: DataTypes.STRING,
  },
  date_join: {
    type: DataTypes.DATEONLY,
  },
  date_leave: {
    type: DataTypes.DATEONLY,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Employment,
        key: 'id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Industry_Experience;
