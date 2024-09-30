const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// const { Application } = require('express');
const user = require('./user');

const Application = sequelize.define('application', {

  reg_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    references: {
        model: user,
        key: 'reg_id'
      }
  },
  app_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  add_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dept: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  post: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Application;
