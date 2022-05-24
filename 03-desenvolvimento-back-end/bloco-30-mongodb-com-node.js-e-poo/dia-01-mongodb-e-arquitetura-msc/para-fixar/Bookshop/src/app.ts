import express from "express";
import { routes as BookRotes } from "./routes/book";
import { routes as MovieRotes } from "./routes/movie";

import { connection } from "./models/connection";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    connection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(BookRotes);
    this.express.use(MovieRotes);
  }
}

export default App;