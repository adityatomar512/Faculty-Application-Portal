const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const application = require('./application');

const Personal_Details = sequelize.define('Personal_Details', {

  app_number: {
    type: DataTypes.STRING,
    primaryKey: true,
    references: {
        model: application,
        key: 'app_number'
      }
  },
  f_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  m_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  l_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marital_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mob: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alt_mob: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alt_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  landline: {
    type: DataTypes.STRING,
    allowNull: false
  },
  c_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  p_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_proof: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Personal_Details;
