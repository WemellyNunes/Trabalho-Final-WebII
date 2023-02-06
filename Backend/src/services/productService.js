const db = require('../db');

module.exports = {
    //PRODUCTS
    findAllProducts: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM products", (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    getOneProduct: (codigo) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM products WHERE codigo = ?", [codigo], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res[0]);
                }else{
                    resolve(false);
                }
           });
        });
    },
    getCategory: (categoria) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM products WHERE categoria = ?", [categoria], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res);
                }else{
                    resolve(false);
                }
           });
        });
    },
    insertProduct: (nome, categoria, quant_disponivel, preco_unidade) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO products (nome, categoria, quant_disponivel, preco_unidade) VALUES (?, ?, ?, ?)", 
                [nome, categoria, quant_disponivel, preco_unidade], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res.insertCodigo);
            });
        });
    },
    updateProduct: (codigo, nome, categoria, quant_disponivel, preco_unidade) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE products SET nome = ?, categoria = ?, quant_disponivel = ?, preco_unidade = ? WHERE codigo = ?", 
                [nome, categoria, quant_disponivel, preco_unidade, codigo], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    deleteProduct: (codigo) => {
        return new Promise((resolve, reject) => {
            let existeProduto = false;
            db.query("SELECT * FROM products WHERE codigo = ?", [codigo], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    existeProduto = true;
                }
           });
           if(existeProduto){
               db.query("DELETE FROM products WHERE codigo = ?", [codigo], (err, res) => {
                   if(err){
                       reject(err);
                       return;
                   }
                   resolve(res);
               });
           }else{
            resolve(false);
           }
        });
    },
    //=================================

    //STORE
    findAllStores: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM store", (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    getOneStore: (codigo) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM store WHERE codigo = ?", [codigo], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res[0]);
                }else{
                    resolve(false);
                }
           });
        });
    },
    insertStore: (nome, cnpj) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO store (nome, cnpj) VALUES (?, ?)", 
                [nome, cnpj], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res.insertCodigo);
            });
        });
    },
    updateStore: (codigo, nome, cnpj) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE store SET nome = ?, cnpj = ? WHERE codigo = ?", 
                [nome, cnpj, codigo], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    deleteStore: (codigo) => {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM store WHERE codigo = ?", [codigo], (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    //=================================

    //PERSONS
    findAllPersons: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM persons", (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    findSeller: (cnpj) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM store s LEFT JOIN persons p ON p.parent_codigo = s.codigo WHERE p.tipo = 2 AND s.cnpj = ?", [cnpj], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res);
                }else{
                    resolve(false);
                }
           });
        });
    },
    getOnePerson: (codigo) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM persons WHERE codigo = ?", [codigo], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res[0]);
                }else{
                    resolve(false);
                }
           });
        });
    },
    insertPerson: (parent_codigo, nome, cpf, usuario, tipo) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO persons (parent_codigo, nome, cpf, usuario, tipo) VALUES (?, ?, ?, ?, ?)", 
                [parent_codigo, nome, cpf, usuario, tipo], 
                (err, res) =>{
                
                if(err){
                    reject(err);
                    return;
                }
                resolve(res.insertCodigo);
            });
        });
    },
    updatePerson: (codigo, parent_codigo, nome, cpf, usuario, tipo) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE persons SET parent_codigo = ?, nome = ?, cpf = ?, usuario = ?, tipo = ? WHERE codigo = ?", 
                [parent_codigo, nome, cpf, usuario, tipo, codigo], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    deletePerson: (codigo) => {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM persons WHERE codigo = ?", [codigo], (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    //=================================

    //SALES
    findAllSales: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM sales", (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    getOneSale: (codigo) => {
        return new Promise((resolve, reject) => {
           db.query("SELECT * FROM sales WHERE codigo = ?", [codigo], (err, res) =>{
                if(err){
                    reject(err);
                    return;
                }
                if(res.length > 0){
                    resolve(res[0]);
                }else{
                    resolve(false);
                }
           });
        });
    },
    insertSale: (nome_comprador, nome_loja, json_venda) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO sales (nome_comprador, nome_loja, json_venda) VALUES (?, ?, ?)", 
                [nome_comprador, nome_loja, json_venda], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res.insertCodigo);
            });
        });
    },
    updateSale: (codigo, nome_comprador, nome_loja, json_venda) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE sales SET nome_comprador = ?, nome_loja = ?, json_venda = ? WHERE codigo = ?", 
                [nome_comprador, nome_loja, json_venda, codigo], 
                (err, res) =>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    deleteSale: (codigo) => {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM sales WHERE codigo = ?", [codigo], (err, res) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
};