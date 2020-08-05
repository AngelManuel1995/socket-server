import { Socket } from "socket.io";
import chalk from 'chalk'

export const disconnect = ( cliente:Socket ) => {
	cliente.on("disconnect", () => {
		console.log(chalk.red.bold('Cliente desconectado'))
	})
}

export const message = ( cliente:Socket, io:SocketIO.Server ) => {
	cliente.on("message", ( payload: { de:string, cuerpo:string } ) => {
		console.log(chalk.red.bold('Message was gotten', JSON.stringify(payload, undefined, 2)))
		io.emit('new-message', payload)
	})
}