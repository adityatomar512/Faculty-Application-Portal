const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');
const Phd_Details = require('./Phd_Details');
const Pg_Details = require('./Pg_Details');
const Ug_Details = require('./Ug_Details');

const Educational_Qualifications = sequelize.define('Educational_Qualifications', {

  app_number: {
    type: DataTypes.STRING,
    primaryKey: true,
    references: {
        model: application,
        key: 'app_number'
      }
  },
  phd_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Phd_Details,
        key: 'phd_id'
      }
  },
  pg_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Pg_Details,
        key: 'pg_id'
      }
  },
  ug_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Ug_Details,
        key: 'ug_id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Educational_Qualifications;
