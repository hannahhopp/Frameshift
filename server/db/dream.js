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
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/standard.jpg',
  },
  score: {
    type: Sequelize.FLOAT
  },
  comparative: {
    type: Sequelize.FLOAT
  },
  tokens: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  positive: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  negative: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

module.exports = { Dream, STANDARD, VIVID, LUCID, NIGHTMARE };
