import { API } from '../../service'
import { ServerMock } from '../../mock'

describe('Should Get Payment Options For Charity ID 1', () => {
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
  test('Start Testing #GetPaymentOptionsForCharityID1', () => {
    API.getPayments(1).then(response => {
      expect(response.data).toBeTruthy()
    })
  })
})
