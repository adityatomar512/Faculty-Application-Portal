const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Publications = require('./Publications');

const Best_Publications = sequelize.define('Best_Publications', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  yearvolpage: {
    type: DataTypes.STRING,
  },
  impact: {
    type: DataTypes.STRING,
  },
  doi: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  pub_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Publications,
        key: 'id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Best_Publications;
