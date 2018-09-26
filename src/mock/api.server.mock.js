import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

let serverInstance = {}

/**
 * Create test server for testing API
 */
const ServerMock = {
  start: done => {
    server.use(middlewares)
    server.use(router)
    /**
     * Get server instance for stopping this server later
     */
    serverInstance = server.listen(
      {
        host: 'http://192.168.1.4',
        port: 3001,
      },
      done,
    )
  },
  stop: done => {
    serverInstance.close(done)
  },
}

export default ServerMock
