const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employment = require('./Employment');

const Emp_History = sequelize.define('Emp_History', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING,
  },
  organisation: {
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

module.exports = Emp_History;
