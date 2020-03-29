const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *
 * Rota / Recurso 
 */


/**
 * Métodos HTTP
 * 
 * Método GET: Buscar uma informação do Back-End
 * Método POST: Criar umas  informação no Back-End
 * Método PUT: Alterar uma informação no Back-End
 * Método DELETE: Deletar uma informação no Back-End
 */

 /**
  * 
  * Tipos de Parametros
  * 
  * Query Params: Parâmetros nomeados na rota após o símbolo de (?) (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  */

  /**
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server   
   * NoSQL: MongoDB,  CouchDB, etc...
   */

   /**
    * 
    * Driver: Select * from user
    * Query Builder: table('users').select('*').where()
    */

    


