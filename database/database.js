import mysql from "mysql2"

const connection = mysql.createConnection({
    user:"uvc", //Substitua pelo seu usuário
    password:"@ds2022uvc", //Substitua pela sua senha
    host:"localhost",
    database:"supermercado"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Conectado ao Mysql")
})

export default connection;