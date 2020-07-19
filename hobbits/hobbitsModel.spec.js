const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

it('should set the testing environment', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('hobbits model', () => {

  beforeAll()
  beforeEach(async () => {
    // truncate table to clear it?, not drop the table
    // await db.truncate('hobbits')
  })
  afterEach()
  afterAll()
})

describe('insert()', () => {
  it('should add the provided hobbit to database', async () => {
    const records = await db('hobbits')
    expect(records).toHaveLength(0)

    // add hobbit to db
    await Hobbits.insert({name: 'kate'})

    // check if it was added
    const hobbits = await db('hobbits')

    expect(hobbits).toHaveLength(1)
  })
})
