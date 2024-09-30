const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Phd_Details = sequelize.define('Phd_Details', {

  phd_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  university: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dept: {
    type: DataTypes.STRING,
    allowNull: false
  },
  supervisor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date_defence: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  date_award: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Phd_Details;
