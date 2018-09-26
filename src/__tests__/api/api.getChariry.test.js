import { API } from '../../service'
import { ServerMock, APICharityMock } from '../../mock'

describe('Should Get Specific Chariry Information', () => {
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
  test('Start Testing #GetSpecificCharityInformation', () => {
    API.getCharity(1).then(response => {
      expect(response.data).toMatchObject(APICharityMock)
    })
  })
})
