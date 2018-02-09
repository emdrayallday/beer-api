require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const db = new PouchDB(process.env.COUCHDB_URL)

const getBeer = (id, cb) => db.get(id, cb)
const getBrewery = (id, cb) => db.get(id, cb)
module.exports = { getBeer, getBrewery }
