import mysql from "mysql2"

const connection = mysql.createConnection({
    user:"admin", //Substitua pelo seu usuário
    password:"admin", //Substitua pela sua senha
    host:"localhost",
    database:"supermercado"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Conectado ao Mysql")
})

export default connection;
