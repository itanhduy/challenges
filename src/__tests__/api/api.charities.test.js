import { API } from '../../service'
import { APICharitiesMock } from '../../mock'

test('Should get list charities', () => {
  API.charities().then(response => {
    expect(response.data).toMatchObject(APICharitiesMock)
  })
})
