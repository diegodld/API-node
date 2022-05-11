import express from "express"
import cors from "cors"
import routerProducts from "./routes/routes.js"

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("Api de Produtos")
})

app.use("/produtos",routerProducts)


app.listen(8080,()=>console.log("Servidor rodando em http://localhost:8080"))