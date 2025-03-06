import express
// , {Request, Response} 
from 'express';
// import path from 'node:path';
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from "@apollo/server/express4";
// import cors from "cors";
// import bodyParser from "body-parser";

import db from './config/connection.js';
// import routes from './routes/index.js';

import { typeDefs, resolvers } from './schemas/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const startApolloServer = async () => {

  await server.start();
  await db()

  const PORT = process.env.PORT || 3001;
  const app = express();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

// app.use(express.static(path.join(process.cwd(), '../client/dist')));

// app.get('*', (_req: Request, res: Response) => {
//     res.sendFile(path.join(process.cwd(), '../client/dist/index.html'));
// });


  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));

}

startApolloServer();