const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/* 
rota / recurso

Métodos HTTP:

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
Put: Alterar uma informação no back-end
Delete: Deletar uma informação no back-end

*/

/**
 * tipos de parametros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recurso
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**Routes Params
  app.get('/users/:id' , (request, response) => {
   const params = request.params;

   console.log(params);

  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno:'Ronierison Braz'
  });  
});

app.listen(3333);
*/


/**Query Params
app.get('/users' , (request, response) => {
  const params = request.query;

 console.log(params);
  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno:'Ronierison Braz'
  });  
});

app.listen(3333); */

/**Request Body*/

/**
 * Sql: MySql, SQlite, PostgreSql, Oracle, microsoft Sql Serve (Bancos relacionais)
 * NoSQL: MongoDb, CouchDB, Etc (Bancos não relacionais)
 */
 /**
  * Driver: Select * From users
  * Query Builder: 
  */

/** 
app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno:'Ronierison Braz da silva'
  });  
});
*/



