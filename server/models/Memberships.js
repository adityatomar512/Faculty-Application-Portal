const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Memberships = sequelize.define('Memberships', {
    
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
  name_society: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Memberships;
