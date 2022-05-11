import connection from "../database/database.js";

function getProducts(req,res){
    let sql = "SELECT * FROM produtos;";
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        let produtos = result;
        res.json(produtos);
    })
}

export default getProducts;