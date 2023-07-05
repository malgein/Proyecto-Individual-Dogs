const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    ID:{
      // type: DataTypes.UUID,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      //No me funcione con UUID como id
      // defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    Imagen:{
      type: DataTypes.TEXT,
			allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura:{
      type: DataTypes.STRING,
			allowNull: false
    },
    Peso:{
      type: DataTypes.STRING,
			allowNull: false
    },
    Años_de_vida:{
      type: DataTypes.STRING,
			allowNull: false
    }

  });
};
