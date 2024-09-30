const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Referees = sequelize.define('Referees', {
    
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
  position: {
    type: DataTypes.STRING,
  },
  association: {
    type: DataTypes.STRING,
  },
  organisation: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  contact: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Referees;
