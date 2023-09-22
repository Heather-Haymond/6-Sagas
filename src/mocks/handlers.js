// handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import {rest} from 'msw' // msw supports graphql too!
import {data} from './mockData'
const handlers = [
  rest.get('/zoo', async (req, res, ctx) => {
    
    return res(ctx.json(data))
  })
]

export {handlers}