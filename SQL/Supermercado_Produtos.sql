CREATE DATABASE supermercado;

USE supermercado;
CREATE TABLE produtos(
id INT auto_increment not null primary key,
nome varchar(50),
preco decimal(10,2)
);

INSERT INTO produtos (nome, preco) VALUES ("Pernil", 19.99);
INSERT INTO produtos (nome, preco) VALUES ("Peito de Frango", 15.90);
INSERT INTO produtos (nome, preco) VALUES ("Calabresa",20.99);
INSERT INTO produtos (nome, preco) VALUES ("Leite Ninho",15.99);
INSERT INTO produtos (nome, preco) VALUES ("Arroz 5Kg",25.00);
INSERT INTO produtos (nome, preco) VALUES ("Feijão Carioca 1Kg",7.00);
INSERT INTO produtos (nome, preco) VALUES ("Bombom Garoto",8.99);
INSERT INTO produtos (nome, preco) VALUES ("Snickers",3.50);
INSERT INTO produtos (nome, preco) VALUES ("Macarrão 1 Kg",5.50);
INSERT INTO produtos (nome, preco) VALUES ("Pó de Café 500g",19.90);


