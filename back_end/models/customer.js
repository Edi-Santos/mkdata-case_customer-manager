const Customer = (sequelize, DataTypes) => {
  const customer = sequelize.define('Customuer', {
      nome: DataTypes.STRING(70),
      tipo: DataTypes.STRING(15),
      'CPF/CNPJ': DataTypes.INTEGER,
      RG: DataTypes.INTEGER,
      // eslint-disable-next-line camelcase
      data_cadastro: DataTypes.DATE,
      grupo: DataTypes.STRING(10),
      ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    });
  return customer;
};

module.exports = Customer;
