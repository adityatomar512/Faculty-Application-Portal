const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Publications = sequelize.define('Publications', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  intj_paper: {
    type: DataTypes.INTEGER,
  },
  natj_paper: {
    type: DataTypes.INTEGER,
  },
  intc_paper: {
    type: DataTypes.INTEGER,
  },
  natc_paper: {
    type: DataTypes.INTEGER,
  },
  no_patent: {
    type: DataTypes.INTEGER,
  },
  no_book: {
    type: DataTypes.INTEGER,
  },
  no_bookch: {
    type: DataTypes.INTEGER,
  },
  google_link: {
    type: DataTypes.STRING,
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

module.exports = Publications;
