import Server from "./classes/server";
import router from "./routes/routes";
import cors from 'cors'

const server = Server.instance
server.getApp().use(cors({origin:true, credentials:true}))
server.getApp().use(router)

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.getPort()}`)
})
