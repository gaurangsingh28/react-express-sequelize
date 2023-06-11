const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename); // it will give current file name i.e index.js
const Sequelize = require('sequelize');
let db = {};
let url = process.env.DATABASE_CONNECTION_URL || 'postgres://postgres:postgres@localhost:5432/blog';
const sequelize = new Sequelize({
    dialect: "sqlite"
  });
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(`./${file}`)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        //await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
module.exports = db;

