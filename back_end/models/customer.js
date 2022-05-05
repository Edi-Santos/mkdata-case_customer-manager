const Customer = (sequelize, DataTypes) => {
  const customer = sequelize.define('Customer', {
      nome: DataTypes.STRING(70),
      tipo: DataTypes.STRING(15),
      'CPF/CNPJ': DataTypes.STRING(20),
      RG: DataTypes.STRING(20),
      // eslint-disable-next-line camelcase
      data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      grupo: DataTypes.STRING(10),
      ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    }, { timestamps: false });
  return customer;
};

module.exports = Customer;
