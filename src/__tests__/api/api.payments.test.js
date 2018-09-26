import { API } from '../../service'
import { ServerMock } from '../../mock'

describe('Should Get List Payments', () => {
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
  test('Start Testing #GetListPayments', () => {
    API.charities().then(response => {
      expect(response.status).toBe(200)
    })
  })
})
