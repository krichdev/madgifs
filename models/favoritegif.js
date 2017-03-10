'use strict';
module.exports = function(sequelize, DataTypes) {
  var favoritegif = sequelize.define('favoritegif', {
    tvGif: DataTypes.STRING,
    reactionGif: DataTypes.STRING,
    celebGif: DataTypes.STRING,
    emotionGif: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.favoritegif.belongsTo(models.user);
      }
    }
  });
  return favoritegif;
};
