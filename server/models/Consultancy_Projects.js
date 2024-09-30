const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Consultancy_Projects = sequelize.define('Consultancy_Projects', {
    
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
  organisation: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  period: {
    type: DataTypes.INTEGER,
  },
  role: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Consultancy_Projects;
