const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employment = require('./Employment');

const Teach_Experience = sequelize.define('Teach_Experience', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  position: {
    type: DataTypes.STRING,
  },
  employer: {
    type: DataTypes.STRING,
  },
  course_taught: {
    type: DataTypes.STRING,
  },
  ug_pg: {
    type: DataTypes.STRING,
  },
  stud_number: {
    type: DataTypes.INTEGER,
  },
  date_join: {
    type: DataTypes.DATEONLY,
  },
  date_leave: {
    type: DataTypes.DATEONLY,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  emp_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Employment,
        key: 'id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Teach_Experience;
