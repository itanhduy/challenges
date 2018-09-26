import { API } from '../../service'
import { APICharitiesMock, ServerMock } from '../../mock'

describe('Should Get List Charities', () => {
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
  test('Start Testing #GetListCharities', () => {
    API.charities().then(response => {
      expect(response.data).toMatchObject(APICharitiesMock)
    })
  })
})
