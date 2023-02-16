const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('sipsis', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const userView = sequelize.define(users, {
    kredensial: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING 
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = userView;