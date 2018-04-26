const Sequelize = require('sequelize');
const db = require('./db');

const Dream = db.define('dream', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  dreamDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  dreamType: {
    type: Sequelize.ENUM('STANDARD', 'VIVID', 'LUCID', 'NIGHTMARE'),
    defaultValue: 'STANDARD',
    allowNull: false
  },
  dream: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Dream;
