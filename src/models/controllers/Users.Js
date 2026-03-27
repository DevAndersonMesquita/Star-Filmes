class users {
  constructor (email, cpf, senha){
    this.email = email
    this.cpf = cpf
    this.senha = senha
    this.id = id
}
}

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, allowNull: false },
  senha: { type: DataTypes.STRING }
});