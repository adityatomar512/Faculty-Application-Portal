const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employment = require('./Employment');

const Research_Experience = sequelize.define('Research_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING,
  },
  institute: {
    type: DataTypes.STRING,
  },
  supervisor: {
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

module.exports = Research_Experience;
