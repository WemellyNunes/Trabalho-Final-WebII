const productService = require('../services/productService');

module.exports = {
    //PRODUCTS
    findAllProducts: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let products = await productService.findAllProducts();

        for(let i in products){
            json.result.push({
                codigo             : products[i].codigo,
                nome               : products[i].nome,
                categoria          : products[i].categoria,
                quant_disponivel   : products[i].quant_disponivel,
                preco_unidade      : products[i].preco_unidade,
            });
        }

        res.json(json);
    },
    getOneProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo = req.params.codigo;
        let product = await productService.getOneProduct(codigo);

        if(product){
            json.result = product;
        }

        res.json(json)
    },
    getCategory: async(req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let categoria = req.params.categoria
        let products = await productService.getCategory(categoria);

        for(let i in products){
            json.result.push({
                codigo             : products[i].codigo,
                nome               : products[i].nome,
                categoria          : products[i].categoria,
                quant_disponivel   : products[i].quant_disponivel,
                preco_unidade      : products[i].preco_unidade,
            });
        }

        res.json(json);
    },
    insertProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome             = req.body.nome;
        let categoria        = req.body.categoria;
        let quant_disponivel = req.body.quant_disponivel;
        let preco_unidade    = req.body.preco_unidade;

        if(nome && categoria && quant_disponivel && preco_unidade){
            let productID = await productService.insertProduct(nome, categoria, quant_disponivel, preco_unidade);
            json.result = {
                codigo: productID,
                nome,
                categoria,
                quant_disponivel,
                preco_unidade
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo           = req.params.codigo;
        let nome             = req.body.nome;
        let categoria        = req.body.categoria;
        let quant_disponivel = req.body.quant_disponivel;
        let preco_unidade    = req.body.preco_unidade;

        if(codigo && nome && categoria && quant_disponivel && preco_unidade){
            await productService.updateProduct(codigo, nome, categoria, quant_disponivel, preco_unidade);
            json.result = {
                codigo,
                nome,
                categoria,
                quant_disponivel,
                preco_unidade
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteProduct(req.params.codigo);

        if(req.params.codigo){
            json.result = "O produto de codigo " + req.params.codigo + " foi removido com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //STORE
    findAllStores: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };

        let store = await productService.findAllStores();

        for(let i in store){
            json.result.push({
                codigo             : store[i].codigo,
                nome               : store[i].nome,
                cnpj               : store[i].cnpj
            });
        }

        res.json(json);
    },
    getOneStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo = req.params.codigo;
        let store = await productService.getOneStore(codigo);

        if(store){
            json.result = store;
        }

        res.json(json)
    },
    insertStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome  = req.body.nome;
        let cnpj  = req.body.cnpj;

        if(nome && cnpj){
            let storeID = await productService.insertStore(nome, cnpj);
            json.result = {
                codigo: storeID,
                nome,
                cnpj
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo           = req.params.codigo;
        let nome             = req.body.nome;
        let cnpj             = req.body.cnpj;

        if(codigo && nome && cnpj){
            await productService.updateStore(codigo, nome, cnpj);
            json.result = {
                codigo,
                nome,
                cnpj
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteStore(req.params.codigo);

        if(req.params.codigo){
            json.result = "A loja de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //PERSONS
    findAllPersons: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let persons = await productService.findAllPersons();

        for(let i in persons){
            json.result.push({
                codigo         : persons[i].codigo,
                parent_codigo  : persons[i].parent_codigo,
                nome           : persons[i].nome,
                cpf            : persons[i].cpf,
                usuario        : persons[i].usuario,
                tipo           : persons[i].tipo,
            });
        }

        res.json(json);
    },
    findSeller: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let cnpj = req.params.cnpj
        let persons = await productService.findSeller(cnpj);
        
        for(let i in persons){
            json.result.push({
                codigo         : persons[i].codigo,
                parent_codigo  : persons[i].parent_codigo,
                nome           : persons[i].nome,
                cpf            : persons[i].cpf,
                usuario        : persons[i].usuario,
                tipo           : persons[i].tipo,
            });
        }

        res.json(json);
    },
    getOnePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo = req.params.codigo;
        let person = await productService.getOnePerson(codigo);

        if(person){
            json.result = person;
        }

        res.json(json)
    },
    insertPerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let typePersons = { //caso tenha um novo tipo, adicionar aqui para validar
            "ADMIN": 1, 
            "VENDEDOR": 2, 
            "CLIENTE": 3
        };
        let typeRequest    = req.params.tipo
        let parent_codigo  = req.body.parent_codigo;
        let nome           = req.body.nome;
        let cpf            = req.body.cpf;
        let usuario        = req.body.usuario;
        let tipo

        tipo = typePersons[typeRequest] != undefined ? typePersons[typeRequest] : "INVALIDO"

        if(parent_codigo && nome && cpf && usuario && tipo != "INVALIDO"){
            let personID = await productService.insertPerson(parent_codigo, nome, cpf, usuario, tipo);
            json.result = {
                codigo: personID,
                parent_codigo,
                nome,
                cpf,
                usuario,
                tipo
            };
        }else{
            json.error = 'Está faltando campo no cadastro ou tipo inválido!'
        }

        res.json(json)
    },
    updatePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };
        let typePersons = { //caso tenha um novo tipo, adicionar aqui para validar
            "ADMIN": 1, 
            "VENDEDOR": 2, 
            "CLIENTE": 3
        };
        let typeRequest    = req.params.tipo
        let codigo         = req.params.codigo;
        let parent_codigo  = req.body.parent_codigo;
        let nome           = req.body.nome;
        let cpf            = req.body.cpf;
        let usuario        = req.body.usuario;
        let tipo

        tipo = typePersons[typeRequest] != undefined ? typePersons[typeRequest] : "INVALIDO"

        if(codigo && parent_codigo && nome && cpf && usuario && tipo != "INVALIDO"){
            await productService.updatePerson(codigo, parent_codigo, nome, cpf, usuario, tipo);
            json.result = {
                codigo,
                parent_codigo,
                nome,
                cpf,
                usuario,
                tipo
            };
        }else{
            json.error = 'Está faltando campo no cadastro ou tipo inválido!'
        }

        res.json(json)
    },
    deletePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deletePerson(req.params.codigo);

        if(req.params.codigo){
            json.result = "A pessoa de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //STORE
    findAllSales: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };

        let sales = await productService.findAllSales();

        for(let i in sales){
            json.result.push({
                codigo         : sales[i].codigo,
                nome_comprador : sales[i].nome_comprador,
                nome_loja      : sales[i].nome_loja,
                json_venda     : sales[i].json_venda
            });
        }

        res.json(json);
    },
    getOneSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo = req.params.codigo;
        let sale = await productService.getOneSale(codigo);

        if(sale){
            json.result = sale;
        }

        res.json(json)
    },
    insertSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome_comprador  = req.body.nome_comprador;
        let nome_loja  = req.body.nome_loja;
        let json_venda  = req.body.json_venda;

        if(nome_comprador && nome_loja && json_venda){
            let saleID = await productService.insertSale(nome_comprador, nome_loja, json_venda);
            json.result = {
                codigo: saleID,
                nome_comprador,
                nome_loja,
                json_venda
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo         = req.params.codigo;
        let nome_comprador = req.body.nome_comprador;
        let nome_loja      = req.body.nome_loja;
        let json_venda     = req.body.json_venda;

        if(codigo && nome_comprador && nome_loja && json_venda){
            await productService.updateSale(codigo, nome_comprador, nome_loja, json_venda);
            json.result = {
                codigo,
                nome_comprador,
                nome_loja,
                json_venda
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteSale(req.params.codigo);

        if(req.params.codigo){
            json.result = "A venda de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
}