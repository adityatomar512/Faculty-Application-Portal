const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Contributions = sequelize.define('Contributions', {
    
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
  research_contri: {
    type: DataTypes.TEXT,
  },
  teaching_contri: {
    type: DataTypes.TEXT,
  },
  other_info: {
    type: DataTypes.TEXT,
  },
  professional_service: {
    type: DataTypes.TEXT,
  },
  list_journalpub: {
    type: DataTypes.TEXT,
  },
  list_conferencepub: {
    type: DataTypes.TEXT,
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Contributions;
