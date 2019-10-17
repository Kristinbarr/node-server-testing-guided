const request = require('supertest')
const server = require('./server')

describe('GET /', () => {
  // need to run server,
  it('should return 200 OK', () => {
    request(server)
      .get('/')
      .then((response) => {
        expect(response.status).toBe(200)
      })
  })

  it('should return JSON', () => {
    request(server).get('/')
      .then(response => {
        expect(response.type).toMatch(/json/i) // toMatch uses regex to check value
      })
  })

  // should return an obj w api property with value of 'up'
  it('should return { api: "up" }', async () => {
    const response = await request(server).get('/')
    // toBe checks references
    // toStrictEqual
    // toEqual checks values, checks properties inside objects
    expect(response.body).toEqual({ api: 'up' })
    // expect(response.body.api).toBe('up') // this is equavalent
  })

  it("toEqual", () => {
    expect({}).toEqual({})
    expect([]).toEqual([])
    expect([1,2,3]).toEqual([1,2,3])
  })
})
