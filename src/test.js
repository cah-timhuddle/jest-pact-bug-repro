const { pactWith } = require('jest-pact')
const fetch = require('node-fetch')

pactWith({ consumer: 'test-consumer', provider: 'test-provider' }, provider => {
  describe('it doesnt work with test runners other than jasmine', () => {
    it('should work', async () => {
      await provider.addInteraction({
        state: 'it should work',
        uponReceiving: 'A request',
        willRespondWith: { status: 200 },
        withRequest: {
          method: 'GET',
          path: '/test'
        }
      })

      await fetch(provider.mockService.baseUrl + '/test')
    })
  })
})
