import { API } from '../../service'
import { ServerMock } from '../../mock'

describe('Should Add A New Payment', () => {
  beforeAll(done => {
    ServerMock.start(() => {
      done()
    })
  })
  afterAll(done => {
    ServerMock.stop(() => {
      done()
    })
  })
  test('Start Testing #AddANewPayment', () => {
    API.makeNewPayment(1, 10, 'USD').then(response => {
      expect(response.status).toBe(200)
    })
  })
})
