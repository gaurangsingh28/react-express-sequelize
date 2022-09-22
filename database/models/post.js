module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        }
    }, {});

    Post.associate = function (models) {
        Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments',
            onDelete: 'CASCADE',
        });
        Post.belongsTo(models.Author, {
            foreignKey: 'email',
            as: 'author',
            onDelete: 'CASCADE',
        })
    };
    return Post;
};