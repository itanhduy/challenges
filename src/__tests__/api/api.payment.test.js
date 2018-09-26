import { API } from '../../service'
import { ServerMock, APIPaymentMock } from '../../mock'

describe('Should Get Specific Payment With ID 1', () => {
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
  test('Start Testing #GetSpecificPaymentWithID1', () => {
    API.payment(1).then(response => {
      expect(response.data).toMatchObject(APIPaymentMock)
    })
  })
})
