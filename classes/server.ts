import express from "express";
import { SERVER_PORT } from "../global/environment";
import socketIO from "socket.io";
import http from "http";
import chalk from "chalk";
import * as socket from "../sockets/sockets"
export default class Server {
  private static _instance: Server;
  private app: express.Application;
  private PORT: Number;
  private httpServer: http.Server;
  public io: socketIO.Server;

  private constructor() {
    this.app = express();
    this.app.use(express.json());
    this.PORT = SERVER_PORT;
    this.httpServer = new http.Server(this.getApp());
    this.io = socketIO(this.httpServer);
    this.escucharSocket();
  }

  public start(callback: any) {
    this.httpServer.listen(this.getPort(), callback);
  }

  public getPort() {
    return this.PORT;
  }

  public getApp() {
    return this.app;
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private escucharSocket() {
    this.io.on("connection", (cliente: any) => {
			console.log(chalk.green.bold("Nuevo cliente conectado"));
			socket.message(cliente, this.io)
      socket.disconnect(cliente)
    });
  }
}
