require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const slugIt = require('slugify')
const db = new PouchDB(process.env.NEW_URL)

db
  .bulkDocs([
    { _id: 'watermelon', name: 'Watermelon', color: 'red' },
    { _id: 'mandarin-orange', name: 'Mandarin Orange', color: 'orange' },
    { _id: 'grape', name: 'Grape', color: 'purple' }
  ])
  .then(function(resp) {
    console.log(resp)
  })
  .catch(function(err) {
    console.log(err)
  })

const allDocs = (options, cb) => db.allDocs(options, cb)
