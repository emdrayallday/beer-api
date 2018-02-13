require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const slugIt = require('slugify')
const db = new PouchDB(process.env.NEW_URL)

db
  .bulkDocs([
    {
      _id: 'strawberry-kiwi',
      name: 'Strawberry Kiwi',
      color: 'maroon'
    },
    {
      _id: 'grape',
      name: 'Grape',
      color: 'purple'
    },
    {
      _id: 'ice-glacier',
      name: 'ICE GLACIER',
      color: 'cyan'
    },
    {
      _id: 'blue-rush',
      name: 'BLUE RUSH',
      color: 'royal blue'
    }
  ])
  .then(result => console.log(result))
  .catch(err => console.log(err))
