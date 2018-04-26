const Sequelize = require('sequelize');
const db = require('./db');

const STANDARD = 'STANDARD';
const VIVID = 'VIVID';
const LUCID = 'LUCID';
const NIGHTMARE = 'NIGHTMARE';

const Dream = db.define('dream', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  dreamType: {
    type: Sequelize.ENUM(STANDARD, VIVID, LUCID, NIGHTMARE),
    defaultValue: STANDARD,
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

module.exports = { Dream, STANDARD, VIVID, LUCID, NIGHTMARE };
