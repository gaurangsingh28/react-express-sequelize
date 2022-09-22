
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        postId: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
        email: DataTypes.STRING
    }, {});
    Comment.associate = function (models) {
        Comment.belongsTo(models.Author, {
            foreignKey: 'email',
            as: 'author'
        });
        Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post'
        });
    };
    return Comment;
};