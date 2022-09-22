module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {});
    Author.associate = function (models) {
        Author.hasMany(models.Post, {
            foreignKey: 'email',
            as: 'posts',
            onDelete: 'CASCADE',
        });
        Author.hasMany(models.Comment, {
            foreignKey: 'email',
            as: 'comments',
            onDelete: 'CASCADE',
        });
    }
    return Author;
};